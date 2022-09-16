"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5258],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(2203),a=(n(9231),n(4852));const o={},r="Performing mutations",l={unversionedId:"guides/interacting/mutations",id:"guides/interacting/mutations",title:"Performing mutations",description:"Enabling mutations",source:"@site/docs/guides/interacting/mutations.mdx",sourceDirName:"guides/interacting",slug:"/guides/interacting/mutations",permalink:"/docs/next/guides/interacting/mutations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Querying the graph",permalink:"/docs/next/guides/interacting/queries"},next:{title:"Using Apollo",permalink:"/docs/next/guides/interacting/using-apollo"}},s={},u=[{value:"Enabling mutations",id:"enabling-mutations",level:2},{value:"Available mutations",id:"available-mutations",level:2},{value:"Mutations options",id:"mutations-options",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"performing-mutations"},"Performing mutations"),(0,a.kt)("h2",{id:"enabling-mutations"},"Enabling mutations"),(0,a.kt)("p",null,"In order to perform mutations, the Ceramic instance used by the ComposeDB client needs to be authenticated. This can be done by calling the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/classes/client.ComposeClient#setdid"},(0,a.kt)("inlineCode",{parentName:"a"},"setDID")," method")," on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/classes/client.ComposeClient"},(0,a.kt)("inlineCode",{parentName:"a"},"ComposeClient"))," instance with an authenticated ",(0,a.kt)("inlineCode",{parentName:"p"},"DID")," instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"compose.setDID(did)\n")),(0,a.kt)("h2",{id:"available-mutations"},"Available mutations"),(0,a.kt)("p",null,"Mutation functions are automatically generated based on the Models present in the runtime Composite definition, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," prefixes, all wrapped in a top-level ",(0,a.kt)("inlineCode",{parentName:"p"},"Mutation")," object."),(0,a.kt)("h2",{id:"mutations-options"},"Mutations options"),(0,a.kt)("p",null,"Update mutations can be provided an options object with the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replace: Boolean"),": by default the update logic performs a shallow (1 level) merge of the document contents, so existing contents of the document are not removed unless explicitly changed. When setting ",(0,a.kt)("inlineCode",{parentName:"li"},"replace")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", the document contents will be fully replaced by the contents provided in the update mutation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version: CommitID"),": version of the document the update should be applied on. If set, the update logic will load the latest version of the document and throw an error if it doesn't match the expected version.")))}p.isMDXComponent=!0}}]);