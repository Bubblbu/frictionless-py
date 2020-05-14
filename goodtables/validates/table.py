import tabulator
import tableschema
from ..row import Row
from ..timer import Timer
from ..errors import Error
from ..headers import Headers
from ..checks import BaselineCheck
from ..report import Report, ReportTable


def validate_table(
    source,
    *,
    # Source
    headers=1,
    scheme=None,
    format=None,
    encoding=None,
    compression=None,
    pick_rows=None,
    skip_rows=None,
    pick_fields=None,
    skip_fields=None,
    # Schema
    schema={},
    schema_order=None,
    schema_patch=None,
    # Validation
    row_limit=None,
    error_limit=None,
    pick_errors=None,
    skip_errors=None,
    extra_checks=None,
    # Dialect
    **dialect
):

    # Prepare state
    timer = Timer()
    row_number = 0
    warnings = []
    checks = []
    errors = []

    # Prepare stream
    try:

        # Create/open stream
        stream = tabulator.Stream(
            source,
            headers=headers,
            scheme=scheme,
            format=format,
            encoding=encoding,
            compression=compression,
            pick_rows=pick_rows,
            skip_rows=skip_rows,
            pick_columns=pick_fields,
            skip_columns=skip_fields,
            **dialect
        )
        stream.open()

        # Handle no data
        if not stream.headers and not stream.sample:
            message = 'There are no data available'
            raise tabulator.exceptions.SourceError(message)

        # Handle no headers
        if not stream.headers:
            message = 'There are no headers available'
            raise tabulator.exceptions.SourceError(message)

        # Handle no rows
        if not stream.sample:
            message = 'There are no rows available'
            raise tabulator.exceptions.SourceError(message)

    except Exception as exception:
        error = Error.from_exception(exception)
        errors.append(error)
        stream = None

    # Prepare schema
    if stream:

        # Create schema
        try:
            schema = tableschema.Schema(schema)
        except tableschema.exceptions.TableSchemaException as exception:
            errors.append(Error.from_exception(exception))
            schema = None

        # Infer schema
        if schema and not schema.fields:
            schema.infer(stream.sample, headers=stream.headers, confidence=1)

        # Handle schema errors
        if schema and schema.errors:
            for error in schema.errors:
                errors.append(Error.from_exception(error))
            schema = None

        # Support schema ordering
        if schema and schema_order:
            # TODO: implement order_schema
            pass

    # Prepare checks
    if stream and schema:
        checks = [BaselineCheck(stream=stream, schema=schema)]
        # for plugin in plugins:
        #   check = plugin.create_check(stream=stream, schema=schema)
        #   checks.append(check)
        pass

    # Validate headers
    if stream and schema:

        # Get headers
        headers = Headers(
            stream.headers, fields=schema.fields, field_positions=stream.field_positions
        )

        # Validate headers
        for check in checks:
            # TODO: filter pick/skip errors
            errors.extend(check.validate_table_headers(headers))

    # Validate rows
    if stream and schema:
        fields = schema.fields
        field_positions = stream.field_positions
        iterator = stream.iter(extended=True)
        while True:

            # Read cells
            try:
                row_position, _, cells = next(iterator)
            except StopIteration:
                break
            except Exception as exception:
                error = Error.from_exception(exception)
                errors.append(error)
                stream = None

            # Create row
            row_number += 1
            row = Row(
                cells,
                fields=fields,
                field_positions=field_positions,
                row_position=row_position,
                row_number=row_number,
            )

            # Validate row
            for check in checks:
                # TODO: filter pick/skip errors
                errors.extend(check.validate_table_row(row))

            # Row/error limits
            if row_limit and row_number >= row_limit:
                break
            if error_limit and len(errors) >= error_limit:
                break

    # Prepare report
    time = timer.get_time()
    if schema:
        schema = schema.descriptor
    if stream:
        source = stream.source
        headers = stream.headers
        scheme = stream.scheme
        format = stream.format
        encoding = stream.encoding
    if error_limit:
        del errors[error_limit:]

    # Return report
    return Report(
        time=time,
        warnings=warnings,
        tables=[
            ReportTable(
                time=time,
                source=source,
                headers=headers,
                scheme=scheme,
                format=format,
                encoding=encoding,
                schema=schema,
                dialect={},
                rowCount=row_number,
                errors=errors,
            )
        ],
    )