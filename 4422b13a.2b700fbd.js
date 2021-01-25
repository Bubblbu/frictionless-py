(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{131:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(131)),c={title:"CKAN Tutorial",sidebar_label:"CKAN"},o={unversionedId:"tutorials/ckan-tutorial",id:"tutorials/ckan-tutorial",isDocsHomePage:!1,title:"CKAN Tutorial",description:"This functionality requires an experimental ckan plugin. Read More",source:"@site/../docs/tutorials/ckan-tutorial.md",slug:"/tutorials/ckan-tutorial",permalink:"/frictionless-py/docs/tutorials/ckan-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/ckan-tutorial.md",version:"current",lastUpdatedBy:"Holger Bruch",lastUpdatedAt:1611558923,sidebar_label:"CKAN",sidebar:"tutorials",previous:{title:"BugQuery Tutorial",permalink:"/frictionless-py/docs/tutorials/bigquery-tutorial"},next:{title:"CSV Tutorial",permalink:"/frictionless-py/docs/tutorials/csv-tutorial"}},l=[{value:"Reading from CKAN",id:"reading-from-ckan",children:[]},{value:"Writing to CKAN",id:"writing-to-ckan",children:[]},{value:"Configuring CKAN",id:"configuring-ckan",children:[]}],s={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This functionality requires an experimental ",Object(i.b)("inlineCode",{parentName:"p"},"ckan")," plugin. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/frictionless-py/docs/references/plugins-reference"}),"Read More")))),Object(i.b)("p",null,"Frictionless supports reading and writing CKAN datasets."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"! pip install frictionless[ckan]\n")),Object(i.b)("h2",{id:"reading-from-ckan"},"Reading from CKAN"),Object(i.b)("p",null,"You can read a CKAN dataset:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Package\n\npackage = Package.from_ckan(base_url='<base_url>', dataset_id='<dataset_id>', api_key='<api_key>')\nprint(package)\nfor resource in package.resources:\n  print(resource.read_rows())\n")),Object(i.b)("h2",{id:"writing-to-ckan"},"Writing to CKAN"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"[NOTE]")," Timezone information is ignored for ",Object(i.b)("inlineCode",{parentName:"p"},"datetime")," and ",Object(i.b)("inlineCode",{parentName:"p"},"time")," types.")),Object(i.b)("p",null,"You can write a dataset to CKAN:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Package\n\npackage = Package('path/to/datapackage.json')\npackage.to_ckan(base_url='<base_url>', dataset_id='<dataset_id>', api_key='<api_key>')\n")),Object(i.b)("h2",{id:"configuring-ckan"},"Configuring CKAN"),Object(i.b)("p",null,"There is a dialect to configure how Frictionless read and write files in this format. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\nfrom frictionless.plugins.ckan import CkanDialect\n\ndialect = CkanDialect(resource='resource', dataset='dataset', apikey='apikey')\nresource = Resource('https://ckan-portal.com', format='ckan', dialect=dialect)\n")),Object(i.b)("p",null,"References:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://frictionlessdata.io/tooling/python/dialects-reference/#ckan"}),"CKAN Dialect"))))}p.isMDXComponent=!0}}]);