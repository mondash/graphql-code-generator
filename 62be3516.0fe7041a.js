(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{185:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(5),i=r(10),o=(r(1),r(341)),a={id:"prettier",title:"Prettier & Linters"},c={unversionedId:"integrations/prettier",id:"integrations/prettier",isDocsHomePage:!1,title:"Prettier & Linters",description:"The codegen supports lifecycle hooks, and you can use those for integration with Prettier or other linters, to apply your custom code-style and formatting rules.",source:"@site/docs/integrations/prettier.md",slug:"/integrations/prettier",permalink:"/docs/integrations/prettier",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/integrations/prettier.md",version:"current",sidebar:"sidebar",previous:{title:"GatsbyJS",permalink:"/docs/integrations/gatsby"},next:{title:"Apollo Federation",permalink:"/docs/integrations/federation"}},l=[{value:"Prettier",id:"prettier",children:[]},{value:"TSLint",id:"tslint",children:[]},{value:"ESLint",id:"eslint",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The codegen supports lifecycle hooks, and you can use those for integration with Prettier or other linters, to apply your custom code-style and formatting rules."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/lifecycle-hooks"}),"You can read the complete documentation of lifecycle hooks here")),Object(o.b)("h2",{id:"prettier"},"Prettier"),Object(o.b)("p",null,"You can run it per each file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterOneFileWrite:\n    - prettier --write\n")),Object(o.b)("p",null,"Or, for all files together:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterAllFileWrite:\n    - prettier --write\n")),Object(o.b)("h2",{id:"tslint"},"TSLint"),Object(o.b)("p",null,"You can run it per each file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterOneFileWrite:\n    - tslint --fix\n")),Object(o.b)("p",null,"Or, for all files together:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterAllFileWrite:\n    - tslint --fix\n")),Object(o.b)("h2",{id:"eslint"},"ESLint"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterOneFileWrite:\n    - eslint --fix\n")),Object(o.b)("p",null,"Or, for all files together:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"hooks:\n  afterAllFileWrite:\n    - eslint --fix\n")))}p.isMDXComponent=!0},341:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(1),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,d=u["".concat(a,".").concat(f)]||u[f]||b[f]||o;return r?i.a.createElement(d,c(c({ref:t},s),{},{components:r})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);