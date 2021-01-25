(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(131)),i={title:"Text Tutorial",sidebar_label:"Text"},c={unversionedId:"tutorials/text-tutorial",id:"tutorials/text-tutorial",isDocsHomePage:!1,title:"Text Tutorial",description:"Frictionless supports loading textual data",source:"@site/../docs/tutorials/text-tutorial.md",slug:"/tutorials/text-tutorial",permalink:"/frictionless-py/docs/tutorials/text-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/text-tutorial.md",version:"current",lastUpdatedBy:"pedrovgp",lastUpdatedAt:1611559175,sidebar_label:"Text",sidebar:"tutorials",previous:{title:"S3 Tutorial",permalink:"/frictionless-py/docs/tutorials/s3-tutorial"},next:{title:"BugQuery Tutorial",permalink:"/frictionless-py/docs/tutorials/bigquery-tutorial"}},l=[{value:"Reading Text Data",id:"reading-text-data",children:[]},{value:"Writing Text Data",id:"writing-text-data",children:[]},{value:"Configuring Text Data",id:"configuring-text-data",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Frictionless supports loading textual data"),Object(o.b)("h2",{id:"reading-text-data"},"Reading Text Data"),Object(o.b)("p",null,"You can read Text Data using ",Object(o.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\n\nresource = Resource(path='text://id,name\\n1,english\\n2,german.csv')\nprint(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', 'german')])]\n")),Object(o.b)("h2",{id:"writing-text-data"},"Writing Text Data"),Object(o.b)("p",null,"The same is actual for writing Text Data:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write(scheme='text', format='csv')\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"'id,name\\r\\n1,english\\r\\n2,german\\r\\n'\n")),Object(o.b)("h2",{id:"configuring-text-data"},"Configuring Text Data"),Object(o.b)("p",null,"There are no options available in ",Object(o.b)("inlineCode",{parentName:"p"},"TextControl"),"."),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://frictionlessdata.io/tooling/python/controls-reference/#text"}),"Text Control"))))}s.isMDXComponent=!0},131:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);