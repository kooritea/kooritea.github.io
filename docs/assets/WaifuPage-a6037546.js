import{P as b}from"./PageHeader-f8782a7b.js";import{N as y}from"./NextButton-2226e099.js";import{I as N}from"./ImageCon-a73481d0.js";import{b as C}from"./element-plus-5d967f66.js";import{_ as B,u as P,t as W}from"./index-9eb66e63.js";import{b8 as m,bI as D,b0 as I,cg as h,aR as n,aS as g,bD as v,aT as r,a_ as L,b_ as V,bw as f,bx as k,bA as x,bC as c}from"./vendor-a6581121.js";import"./highlightjs-4914df6f.js";const j={components:{PageHeader:b,NextButton:y,ImageCon:N,ElPopover:C},setup(){const i=m(""),s=[],d=[],t=D([]),u=m(!0),p=m(!0),{darkMode:_}=P(),l=()=>{t.push(...d.splice(0,36)),d.length===0&&(u.value=!1)};return W().then(o=>{for(let a=1;a<o.length;a++){const e=Math.floor(Math.random()*(a+1));[o[a],o[e]]=[o[e],o[a]]}o=o.map(a=>({...a,load:!1})),s.push(...o),d.push(...o),l()}).catch(o=>{console.error(o),u.value=!1}).finally(()=>{p.value=!1}),{searchKeyWord:i,hasNext:u,loading:p,onNext:l,darkMode:_,listData:I(()=>i.value?s.filter(o=>o.name.includes(i.value)||o.source.includes(i.value)||o.cv.includes(i.value)):t)}}},K={class:"page"},M={class:"wiafu-box"},S={class:"name"},H={class:"source"},U={class:"cv"},A=["href"],E={class:"name"},F={class:"source"};function R(i,s,d,t,u,p){const _=h("PageHeader"),l=h("ImageCon"),o=h("el-popover"),a=h("NextButton");return n(),g("div",K,[v(_,{modelValue:t.searchKeyWord,"onUpdate:modelValue":s[0]||(s[0]=e=>t.searchKeyWord=e),"show-search-input":!0},null,8,["modelValue"]),r("div",M,[(n(!0),g(L,null,V(t.listData,e=>(n(),g("div",{key:e.id,class:"waifu"},[v(o,{width:"",trigger:"click","popper-class":"popper-waifu",effect:t.darkMode?"dark":"light",onShow:T=>e.load=!0},{reference:k(()=>[v(l,{class:"avatar",src:e.avatar,prefix:["https://cdn.jsdelivr.net/gh/kooritea/kooritea.github.io/img","https://fastly.jsdelivr.net/gh/kooritea/kooritea.github.io/img","https://raw.githubusercontent.com/kooritea/kooritea.github.io/img"]},null,8,["src","prefix"])]),default:k(()=>[r("div",null,[e.load?(n(),f(l,{key:0,class:"tachie",src:e.tachie,prefix:["https://cdn.jsdelivr.net/gh/kooritea/kooritea.github.io/img","https://fastly.jsdelivr.net/gh/kooritea/kooritea.github.io/img","https://raw.githubusercontent.com/kooritea/kooritea.github.io/img"]},null,8,["src","prefix"])):x("",!0),r("div",S,c(e.name),1),r("div",H," 「"+c(e.source)+"」 ",1),r("div",U," Voice: "+c(e.cv),1),e.link?(n(),g("a",{key:1,class:"link",target:"_blank",href:e.link}," Link ",8,A)):x("",!0)])]),_:2},1032,["effect","onShow"]),r("div",E,c(e.name),1),r("div",F," 「"+c(e.source)+"」 ",1)]))),128))]),t.searchKeyWord?(n(),f(a,{key:0,"has-next":!1,onLoadingClick:()=>{}},null,8,["onLoadingClick"])):(n(),f(a,{key:1,hasNext:t.hasNext,"onUpdate:hasNext":s[1]||(s[1]=e=>t.hasNext=e),loading:t.loading,"onUpdate:loading":s[2]||(s[2]=e=>t.loading=e),onLoadingClick:t.onNext},null,8,["hasNext","loading","onLoadingClick"]))])}const X=B(j,[["render",R],["__scopeId","data-v-363d4099"]]);export{X as default};