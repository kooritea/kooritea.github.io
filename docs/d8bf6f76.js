import{_,S as m,x as p,u as g,V as f,W as v,b as n,d as o,e as h,p as k,f as a,g as b,H as P,L as x}from"./assets/index-207a969d.js";import{P as A}from"./95227df1.js";import{M as I}from"./803a03c6.js";import"./vander_commonjsHelpers-87174ba5.js";const M={components:{PageHeader:A,Markdown:I,SvgIcon:m,MDEditor:p({loader:()=>P(()=>import("./c5c33da8.js").then(e=>e.a),["/c5c33da8.js","/assets/index-207a969d.js","/assets/index-bb2ebe44.css","/803a03c6.js","/vander_commonjsHelpers-87174ba5.js","/assets/MarkDown-fa57294d.css","/62d9ce5f.js","/assets/ImageCon-33e9769b.css","/c343b04c.js","/02b52d33.js","/310e47d9.js","/f84cd7d7.js","/9624ec78.js","/9008360d.js","/assets/MDEditor-b72e81ab.css","/assets/el-date-picker-773c6a21.css","/assets/el-scrollbar-633caf6b.css","/assets/el-popper-cecd0dcb.css"],import.meta.url),loadingComponent:x})},setup(){const{isGreatOldOne:e}=g();return{isGreatOldOne:e}},data(){return{content:"",editing:!1}},created(){f(1).then(e=>{this.content=e.content})},methods:{onUpdate(e){return v(e).then(()=>{this.content=e,this.editing=!1})}}},y={class:"page"};function E(e,s,V,r,t,d){const c=n("PageHeader"),l=n("SvgIcon"),i=n("Markdown"),u=n("MDEditor");return o(),h("div",y,[k(c),r.isGreatOldOne?(o(),a(l,{key:0,name:"bianji",onClick:s[0]||(s[0]=C=>t.editing=!0)})):b("",!0),t.editing?(o(),a(u,{key:2,"model-value":t.content,defaultValue:t.content,cache:"about",showDefaultHandlers:["submit","clean","reset"],"ex-handlers":[{name:"取消",handler:()=>{t.editing=!1}}],"on-submit":d.onUpdate},null,8,["model-value","defaultValue","ex-handlers","on-submit"])):(o(),a(i,{key:1,"model-value":t.content},null,8,["model-value"]))])}const B=_(M,[["render",E],["__scopeId","data-v-9a6eea6a"]]);export{B as default};