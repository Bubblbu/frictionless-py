(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{152:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(152)),o={title:"Introduction Guide"},s={unversionedId:"guides/introduction-guide",id:"guides/introduction-guide",isDocsHomePage:!1,title:"Introduction Guide",description:"Let's say we have a few raw data files. It's been just collected by the data researchers, and the quality of data is still far from perfect. In fact, they haven't even removed the comments from the first row!",source:"@site/../docs/guides/introduction-guide.md",slug:"/guides/introduction-guide",permalink:"/docs/guides/introduction-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/introduction-guide.md",version:"current",lastUpdatedBy:"Holger Bruch",lastUpdatedAt:1613375318,sidebar:"guides",previous:{title:"Getting Started",permalink:"/docs/guides/getting-started"},next:{title:"Describing Data",permalink:"/docs/guides/describing-data"}},l=[{value:"Describing Data",id:"describing-data",children:[]},{value:"Extracting Data",id:"extracting-data",children:[]},{value:"Validating Data",id:"validating-data",children:[]},{value:"Transforming Data",id:"transforming-data",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Let's say we have a few raw data files. It's been just collected by the data researchers, and the quality of data is still far from perfect. In fact, they haven't even removed the comments from the first row!"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ cat data/countries.csv\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# clean this data!\nid,neighbor_id,name,population\n1,Ireland,Britain,67\n2,3,France,n/a,find the population\n3,22,Germany,83\n4,,Italy,60\n5\n")),Object(i.b)("p",null,"As we can see, it's a data containing information about European countries and their populations. Also, it's easy to notice that there are two fields having a relationship based on a country's identifier: neighbor_id is a Foreign Key to id."),Object(i.b)("h2",{id:"describing-data"},"Describing Data"),Object(i.b)("p",null,"First of all, we're going to describe our dataset. Frictionless uses powerful ",Object(i.b)("a",{parentName:"p",href:"https://specs.frictionlessdata.io/"},"Frictionless Data Specifications"),". They are very handy to describe:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a data table - ",Object(i.b)("a",{parentName:"li",href:"https://specs.frictionlessdata.io/table-schema/"},"Table Schema")),Object(i.b)("li",{parentName:"ul"},"a data resource - ",Object(i.b)("a",{parentName:"li",href:"https://specs.frictionlessdata.io/data-resource/"},"Data Resource")),Object(i.b)("li",{parentName:"ul"},"a data package - ",Object(i.b)("a",{parentName:"li",href:"https://specs.frictionlessdata.io/data-package/"},"Data Package")),Object(i.b)("li",{parentName:"ul"},"and other objects")),Object(i.b)("p",null,"Let's describe the ",Object(i.b)("inlineCode",{parentName:"p"},"countries")," table:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ frictionless describe data/countries.csv\n$ frictionless describe data/countries.csv --stats # to get also stats\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"---\nmetadata: data/countries.csv\n---\n\npath: data/countries.csv\nencoding: utf-8\nformat: csv\nscheme: file\nhashing: md5\nname: countries\nprofile: tabular-data-resource\nlayout:\n  headerRows:\n    - 2\nschema:\n  fields:\n    - name: id\n      type: integer\n    - name: neighbor_id\n      type: string\n    - name: name\n      type: string\n    - name: population\n      type: string\n")),Object(i.b)("p",null,"As we can see, Frictionless was smart enough to understand that the first row contains a comment. It's good, but we still have a few problems:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"we use ",Object(i.b)("inlineCode",{parentName:"li"},"n/a")," as a missing values marker"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"neighbor_id")," must be numerical: let's edit the schema"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"population")," must be numerical: setting proper missing values will solve it"),Object(i.b)("li",{parentName:"ul"},"there is a relation between the ",Object(i.b)("inlineCode",{parentName:"li"},"id")," and ",Object(i.b)("inlineCode",{parentName:"li"},"neighbor_id")," fields")),Object(i.b)("p",null,"Let's update our metadata and save it to the disc:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Detector, describe\n\ndetector = Detector(field_missing_values=["", "n/a"])\nresource = describe("data/countries.csv", detector=detector)\nresource.schema.get_field("neighbor_id").type = "integer"\nresource.schema.foreign_keys.append(\n    {"fields": ["neighbor_id"], "reference": {"resource": "", "fields": ["id"]}}\n)\nresource.to_yaml("tmp/countries.resource.yaml")\n')),Object(i.b)("p",null,"Let's see what we have created:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ cat tmp/countries.resource.yaml\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"encoding: utf-8\nformat: csv\nscheme: file\nhashing: md5\nname: countries\npath: data/countries.csv\nprofile: tabular-data-resource\nlayout:\n  headerRows:\n    - 2\nschema:\n  fields:\n    - name: id\n      type: integer\n    - name: neighbor_id\n      type: integer\n    - name: name\n      type: string\n    - name: population\n      type: integer\n  foreignKeys:\n    - fields:\n        - neighbor_id\n      reference:\n        fields:\n          - id\n        resource: ''\n  missingValues:\n    - ''\n    - n/a\n")),Object(i.b)("p",null,"It has the same metadata as we saw above but also includes our editing related to missing values and data types. We didn't change all the wrong data types manually because providing proper missing values had fixed it automatically. Now we have a resource descriptor. In the next section, we will show why metadata matters and how to use it."),Object(i.b)("h2",{id:"extracting-data"},"Extracting Data"),Object(i.b)("p",null,"It's time to try extracting our data as a table. As a first naive attempt, we will ignore the metadata we saved on the previous step:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ frictionless extract data/countries.csv\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"---\ndata: data/countries.csv\n---\n\n==  ===========  =======  ==========\nid  neighbor_id  name     population\n==  ===========  =======  ==========\n 1  Ireland      Britain  67\n 2  3            France   n/a\n 3  22           Germany  83\n 4  None         Italy    60\n 5  None         None     None\n==  ===========  =======  ==========\n")),Object(i.b)("p",null,"Actually, it doesn't look terrible, but in reality, data like this is not quite useful:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"it's not possible to export this data e.g., to SQL because integers are mixed with strings"),Object(i.b)("li",{parentName:"ul"},"there is still a basically empty row we don't want to have"),Object(i.b)("li",{parentName:"ul"},"there is a clear mistake in Germany's neighborhood!")),Object(i.b)("p",null,"Let's use the metadata we save to try extracting data with the help of Frictionless Data specifications:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ frictionless extract tmp/countries.resource.yaml --basepath .\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"---\ndata: tmp/countries.resource.yaml\n---\n\n==  ===========  =======  ==========\nid  neighbor_id  name     population\n==  ===========  =======  ==========\n 1  None         Britain          67\n 2            3  France   None\n 3           22  Germany          83\n 4  None         Italy            60\n 5  None         None     None\n==  ===========  =======  ==========\n")),Object(i.b)("p",null,"It's now much better! Numerical fields are numerical fields, and there are no more textual missing values markers. We can't see in the command-line, but missing values are now ",Object(i.b)("inlineCode",{parentName:"p"},"None")," values in Python, and the data can be e.g., exported to SQL. Although, it's still not ready for being published. In the next section, we will validate it!"),Object(i.b)("h2",{id:"validating-data"},"Validating Data"),Object(i.b)("p",null,"Data validation with Frictionless is as easy as describing or extracting data:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ frictionless validate data/countries.csv\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'---\ninvalid: data/countries.csv\n---\n\n===  =====  ============  =============================================================================\nrow  field  code          message\n===  =====  ============  =============================================================================\n  4      5  extra-cell    Row at position "4" has an extra value in field at position "5"\n  7      2  missing-cell  Row at position "7" has a missing cell in field "neighbor_id" at position "2"\n  7      3  missing-cell  Row at position "7" has a missing cell in field "name" at position "3"\n  7      4  missing-cell  Row at position "7" has a missing cell in field "population" at position "4"\n===  =====  ============  =============================================================================\n')),Object(i.b)("p",null,"Ahh, we had seen that coming. The data is not valid; there are some missing and extra cells. But wait a minute, in the first step, we created the metadata file with more information about our table. We have to use it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ frictionless validate tmp/countries.resource.yaml --basepath .\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'---\ninvalid: ./data/countries.csv\n---\n\n===  =====  =================  ==================================================================================================================================\nrow  field  code               message\n===  =====  =================  ==================================================================================================================================\n  3      2  type-error         The cell "Ireland" in row at position "3" and field "neighbor_id" at position "2" has incompatible type: type is "integer/default"\n  4      5  extra-cell         Row at position "4" has an extra value in field at position "5"\n  5  None   foreign-key-error  The row at position "5" does not conform to the foreign key constraint: not found in the lookup table\n  7      2  missing-cell       Row at position "7" has a missing cell in field "neighbor_id" at position "2"\n  7      3  missing-cell       Row at position "7" has a missing cell in field "name" at position "3"\n  7      4  missing-cell       Row at position "7" has a missing cell in field "population" at position "4"\n===  =====  =================  ==================================================================================================================================\n')),Object(i.b)("p",null,"Now it's even worse, but regarding data validation errors, the more, the better, actually. Thanks to the metadata, we were able to reveal some critical errors:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the bad data types, i.e. ",Object(i.b)("inlineCode",{parentName:"li"},"Ireland")," instead of an id"),Object(i.b)("li",{parentName:"ul"},"the bad relation between ",Object(i.b)("inlineCode",{parentName:"li"},"id")," and ",Object(i.b)("inlineCode",{parentName:"li"},"neighbor_id"),": we don't have a country with id 22")),Object(i.b)("p",null,"In the next section, we will clean up the data."),Object(i.b)("h2",{id:"transforming-data"},"Transforming Data"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Currently, the transform capabilities are under construction. For now, we will use Python programming for data cleaning.")),Object(i.b)("p",null,"We will use metadata to fix all the data type problems automatically. The only two things we need to handle manually:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"France's population"),Object(i.b)("li",{parentName:"ul"},"Germany's neighborhood")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Resource, Table\n\ndef source():\n    resource = Resource("tmp/countries.resource.yaml", basepath=\'.\')\n    for row in resource.read_rows():\n        if row["name"] == "France":\n            row["population"] = 67\n        if row["name"] == "Germany":\n            row["neighbor_id"] = 2\n        if row["name"]:\n            yield row\n\nwith Table(source) as table:\n    table.write("tmp/countries-cleaned.csv")\n')),Object(i.b)("p",null,"Finally, we've got the cleaned version of our data, which can be exported to a database or published. We have used a CSV as an output format but could have used Excel, JSON, SQL, and others."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ cat tmp/countries-cleaned.csv\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"id,neighbor_id,name,population\n1,,Britain,67\n2,3,France,67\n3,2,Germany,83\n4,,Italy,60\n")),Object(i.b)("p",null,"We also need to update our metadata file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Resource, describe\n\nsource = Resource("tmp/countries.resource.yaml")\ntarget = describe("tmp/countries-cleaned.csv")\ntarget.schema.foreign_keys = source.schema.foreign_keys\ntarget.to_yaml("tmp/countries-cleaned.resource.yaml")\n')),Object(i.b)("p",null,"After running this script our metadata will be:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ cat tmp/countries-cleaned.resource.yaml\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"encoding: utf-8\nformat: csv\nscheme: file\nhashing: md5\nname: countries-cleaned\npath: tmp/countries-cleaned.csv\nprofile: tabular-data-resource\nschema:\n  fields:\n    - name: id\n      type: integer\n    - name: neighbor_id\n      type: any\n    - name: name\n      type: string\n    - name: population\n      type: integer\n  foreignKeys:\n    - fields:\n        - neighbor_id\n      reference:\n        fields:\n          - id\n        resource: ''\n")),Object(i.b)("p",null,"Basically, that's it; now, we have a valid data file and a corresponding metadata file. It can be shared with other people or stored without fear of type errors or other problems making data research not reproducible."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ ls -la tmp/countries-cleaned.csv tmp/countries-cleaned.resource.yaml\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"-rw------- 1 roll roll  91 \u0434\u0435\u043a  2 11:42 tmp/countries-cleaned.csv\n-rw------- 1 roll roll 926 \u0434\u0435\u043a  2 11:41 tmp/countries-cleaned.resource.yaml\n")),Object(i.b)("p",null,"In the next articles, we will explore more advanced Frictionless' functionality."))}d.isMDXComponent=!0}}]);