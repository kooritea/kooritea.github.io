import{P as B}from"./8edce4dc.js";import{N as x}from"./82c93a33.js";import{_ as C,V as k,A as N,r as h,a as V,b as i,d as u,e as _,p as d,h as s,F as M,E as I,f as P,g as W,O as w,ae as A,t as c,w as K,l as L,af as O,ag as Y}from"./assets/index-88e13805.js";/* empty css        *//* empty css        *//* empty css        */import{I as D}from"./b792b75e.js";import{E}from"./4a2d622d.js";import"./02b52d33.js";import"./vander_commonjsHelpers-87174ba5.js";import"./e4296c1b.js";import"./0ba5f200.js";import"./cc801b6b.js";const T={components:{ImageCon:D,NextButton:x,PageHeader:B,TextInput:k,ElDatePicker:E,AsyncButtom:N},setup(){const l=h(""),n=h(""),a=V([]),t=h(!0),r=h(!1),p=()=>{if(n.value)return r.value=!0,O(n.value,a.length?a.length+1:0).then(o=>{a.push(...o),t.value=o.length===24}).finally(()=>{r.value=!1})},m=()=>{if(l.value)return r.value=!0,Y(l.value,a.length/24+1).then(o=>{a.push(...o),t.value=o.length===24}).finally(()=>{r.value=!1})};return{yearMonth:l,keyWord:n,onKeyWordChange:o=>{l.value="",a.splice(0,a.length),t.value=!0,p()},onMonthChange:o=>{n.value="",t.value=!0,a.splice(0,a.length),m()},listData:a,hasNext:t,switchBangumiAdded:o=>o.id?w(o.id).then(()=>{o.id=null}):(delete o.id,A(o).then(e=>{o.id=e.id})),loading:r,onNext:()=>{if(n.value)return p();if(l.value)return m()}}}},U={class:"page"},H={class:"search-box"},F={class:"bangumi-list"},G={class:"left"},R={class:"info"},j={class:"name"},S={class:"nname"},q={class:"episode-time"},z={class:"right"};function J(l,n,a,t,r,p){const m=i("PageHeader"),v=i("el-date-picker"),g=i("TextInput"),y=i("ImageCon"),f=i("AsyncButtom"),o=i("NextButton");return u(),_("div",U,[d(m),s("div",H,[d(v,{modelValue:t.yearMonth,"onUpdate:modelValue":n[0]||(n[0]=e=>t.yearMonth=e),type:"month",placeholder:"按月份搜索","value-format":"YYYY-M",onChange:t.onMonthChange},null,8,["modelValue","onChange"]),d(g,{modelValue:t.keyWord,"onUpdate:modelValue":n[1]||(n[1]=e=>t.keyWord=e),"on-input":t.onKeyWordChange},null,8,["modelValue","on-input"])]),s("div",F,[(u(!0),_(M,null,I(t.listData,e=>(u(),_("div",{key:e.subject,class:"bangumi"},[s("div",G,[d(y,{src:`https://lain.bgm.tv/pic/cover/c${e.img}`,prefix:[""],onClick:Q=>l.$imagePreview(`https://lain.bgm.tv/pic/cover/l${e.img}`,{fileName:e.name||e.nname})},null,8,["src","onClick"]),s("div",R,[s("div",j,c(e.name),1),s("div",S,c(e.nname),1),s("div",q,c(e.episode?`${e.episode}集`:"")+" "+c(e.time),1)])]),s("div",z,[d(f,{type:e.id?"primary":"default",onLoadingClick:()=>t.switchBangumiAdded(e)},{default:K(()=>[L(c(e.id?"已添加":"添加"),1)]),_:2},1032,["type","onLoadingClick"])])]))),128))]),t.keyWord||t.yearMonth?(u(),P(o,{key:0,hasNext:t.hasNext,"onUpdate:hasNext":n[2]||(n[2]=e=>t.hasNext=e),loading:t.loading,"onUpdate:loading":n[3]||(n[3]=e=>t.loading=e),onLoadingClick:t.onNext},null,8,["hasNext","loading","onLoadingClick"])):W("",!0)])}const de=C(T,[["render",J],["__scopeId","data-v-ca5a65b7"]]);export{de as default};