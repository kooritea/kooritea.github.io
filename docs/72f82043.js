import{_ as g,L as _,r as n,gk as m,b as f,d as s,e as c,f as k,g as d,Q as p,aY as v,n as u,T as S}from"./assets/index-3ca71e6b.js";const h={components:{LoadingIcon:_},props:{content:{type:String,default:""}},setup(a){const t=a.content.match(/\[emoji (.*?)\]/)[1],e=n(""),i=n(!0);return m().then(r=>{e.value=`${r}/kooritea/kooritea.github.io/emoji/${t}.png`}),{id:n(t),loading:i,imageSrc:e}}},y={class:"md-sticker"},L=["src","alt"];function B(a,o,t,e,i,r){const l=f("LoadingIcon");return s(),c("div",y,[e.loading?(s(),k(l,{key:0,class:"loading"})):d("",!0),e.imageSrc?p((s(),c("img",{key:1,class:u(["sticker-image",{"sticker-image-loading":e.loading}]),src:e.imageSrc,alt:e.id||a.src,onLoad:o[0]||(o[0]=D=>e.loading=!1),onDragstart:o[1]||(o[1]=S(()=>{},["prevent"]))},null,42,L)),[[v,!e.loading]]):d("",!0)])}const w=g(h,[["render",B],["__scopeId","data-v-d67cfa74"]]);export{w as default};