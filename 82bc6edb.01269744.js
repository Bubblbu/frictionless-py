(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(158)),s={title:"Design Guide"},o={unversionedId:"guides/extension/design-guide",id:"guides/extension/design-guide",isDocsHomePage:!1,title:"Design Guide",description:"This guides provides a high-level overview of the Frictionless Framework architecture. It will be useful for plugin authors and advanced users.",source:"@site/../docs/guides/extension/design-guide.md",slug:"/guides/extension/design-guide",permalink:"/docs/guides/extension/design-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/extension/design-guide.md",version:"current",lastUpdatedBy:"Augusto Herrmann",lastUpdatedAt:1614152170,sidebar:"guides",previous:{title:"Status Guide",permalink:"/docs/guides/framework/status-guide"},next:{title:"Plugin Guide",permalink:"/docs/guides/extension/plugin-guide"}},c=[{value:"System Object",id:"system-object",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guides provides a high-level overview of the Frictionless Framework architecture. It will be useful for plugin authors and advanced users."),Object(a.b)("h2",{id:"system-object"},"System Object"),Object(a.b)("p",null,"The most important undelaying object in the Frictionless Framework is ",Object(a.b)("inlineCode",{parentName:"p"},"system"),". It's an singletone object avaialble as ",Object(a.b)("inlineCode",{parentName:"p"},"frictionless.system"),". This object can be used to instantiate different kind of lower-level as though ",Object(a.b)("inlineCode",{parentName:"p"},"Check"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Step"),", or ",Object(a.b)("inlineCode",{parentName:"p"},"Type"),". Here is a quick example of using the ",Object(a.b)("inlineCode",{parentName:"p"},"system")," object:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import system\n\nresource = Resource(path='https://example.com/data/table.csv')\n\ncheck = system.create_check({'code': 'duplicate-row'})\ncontrol = system.create_control(resource, {'httpTimeout': 1000})\ndialect = system.create_dialect(resource, {'delimiter': ';'})\nloader = system.create_loader(resource)\nparser = system.create_parser(resource)\nserver = system.create_server('api')\nstep = system.create_step({'code': 'table-validate'})\nstorage = system.create_storage('sql', 'postgresql://database')\ntype = system.create_type(resource.get_field('id'))\n")),Object(a.b)("p",null,"As an extension author you might use the ",Object(a.b)("inlineCode",{parentName:"p"},"system")," object in various cases. For example, take a look at this ",Object(a.b)("inlineCode",{parentName:"p"},"MultipartLoader")," excerpts:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"def read_line_stream(self):\n    for number, path in enumerate(self.__path, start=1):\n        with system.create_loader(Resource(path=path)) as loader:\n            for line_number, line in enumerate(loader.byte_stream, start=1):\n                if not self.__headless and number > 1 and line_number == 1:\n                    continue\n                yield line\n")),Object(a.b)("p",null,"It's important to understand that creating low-level objects in general is more corect using the ",Object(a.b)("inlineCode",{parentName:"p"},"system")," object than just classes because it will include all the available plugins in the process."))}u.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?i.a.createElement(b,o(o({ref:t},l),{},{components:n})):i.a.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);