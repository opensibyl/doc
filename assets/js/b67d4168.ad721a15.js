"use strict";(self.webpackChunkopensibyl_doc=self.webpackChunkopensibyl_doc||[]).push([[826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,f=g["".concat(p,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="\u76f4\u63a5\u4f7f\u7528 golang api",l={unversionedId:"experimental/usage-alone/usage-api",id:"experimental/usage-alone/usage-api",title:"\u76f4\u63a5\u4f7f\u7528 golang api",description:"\u4f60\u53ef\u4ee5\u50cf\u6b63\u5e38\u4f7f\u7528 go \u5305\u4e00\u6837\u4f7f\u7528\u5b83\uff0c\u5f00\u5c55\u66f4\u4e3a\u4e2a\u6027\u5316\u7684\u9700\u6c42\u642d\u5efa\u3002",source:"@site/docs/experimental/usage-alone/usage-api.mdx",sourceDirName:"experimental/usage-alone",slug:"/experimental/usage-alone/usage-api",permalink:"/doc/docs/experimental/usage-alone/usage-api",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"\u5b9e\u9a8c\u529f\u80fd",permalink:"/doc/docs/category/\u5b9e\u9a8c\u529f\u80fd"},next:{title:"\u76f4\u63a5\u4f7f\u7528\u547d\u4ee4\u884c",permalink:"/doc/docs/experimental/usage-alone/usage-cmd"}},p={},c=[{value:"\u5982\u679c\u60f3\u8f7b\u5ea6\u5b9a\u5236",id:"\u5982\u679c\u60f3\u8f7b\u5ea6\u5b9a\u5236",level:2},{value:"\u5982\u679c\u60f3\u6df1\u5ea6\u5b9a\u5236",id:"\u5982\u679c\u60f3\u6df1\u5ea6\u5b9a\u5236",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u76f4\u63a5\u4f7f\u7528-golang-api"},"\u76f4\u63a5\u4f7f\u7528 golang api"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u50cf\u6b63\u5e38\u4f7f\u7528 go \u5305\u4e00\u6837\u4f7f\u7528\u5b83\uff0c\u5f00\u5c55\u66f4\u4e3a\u4e2a\u6027\u5316\u7684\u9700\u6c42\u642d\u5efa\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/opensibyl/sibyl2\n")),(0,a.kt)("h2",{id:"\u5982\u679c\u60f3\u8f7b\u5ea6\u5b9a\u5236"},"\u5982\u679c\u60f3\u8f7b\u5ea6\u5b9a\u5236"),(0,a.kt)("p",null,"\u4f8b\u5982\u4e3a\u60a8\u7684\u56e2\u961f\u5c01\u88c5\u4e00\u4e2a\u516c\u53f8\u5185\u90e8\u4f7f\u7528\u7684\u4e0a\u4f20\u5668\uff0c\u53ef\u4ee5\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opensibyl/git-connector"},"https://github.com/opensibyl/git-connector")," \u3002"),(0,a.kt)("h2",{id:"\u5982\u679c\u60f3\u6df1\u5ea6\u5b9a\u5236"},"\u5982\u679c\u60f3\u6df1\u5ea6\u5b9a\u5236"),(0,a.kt)("p",null,"\u4f8b\u5982\u53ea\u60f3\u5229\u7528 sibyl2 \u7684\u63a8\u7406\u529f\u80fd\uff0c\u53ef\u4ee5\u53c2\u8003\u6e90\u7801 ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd/sibyl/subs/diff")," \u76ee\u5f55\u4e0b\uff0c\u6211\u4eec\u7684\u79bb\u7ebf\u7248diff\u3002"))}u.isMDXComponent=!0}}]);