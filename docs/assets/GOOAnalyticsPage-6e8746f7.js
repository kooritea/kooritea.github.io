import{P as w}from"./PageHeader-56066d73.js";import{_ as b,u as O,j as A,f as h}from"./index-8afe2753.js";import{u as C,i as P,a as q,b as M,c as j,d as E,e as z,f as D,g as v}from"./echarts-4b46dc4c.js";import{b2 as f,a_ as H,bh as L,aY as _,aP as y,aQ as I,bA as k,bq as g,ch as x,bo as $,bv as B,bx as G}from"./vendor-b07f99b0.js";import{r as N}from"./GreatOldOne-395b41b1.js";import"./element-plus-966ba156.js";import"./highlightjs-4914df6f.js";C([P,q,M,j,E,z,D]);const S={props:{option:{type:Object,default:()=>({})}},setup(c,{emit:d}){const i=f(!0),{darkMode:o}=O(),{computedOption:r}=A(c,d),s=f(null);let n;const e=()=>{n&&r.value&&n.resize()};return H(()=>{n=v(s.value,o.value?"dark":void 0),r.value&&n.setOption(r.value),window.addEventListener("resize",e)}),L(()=>{window.removeEventListener("resize",e)}),_(r,()=>{n&&r.value&&n.setOption(r.value)}),_(o,()=>{i.value=!1,g(()=>{i.value=!0,g(()=>{n=v(s.value,o.value?"dark":void 0),n.setOption(r.value)})})}),{echars:s,refreshCache:i}}},V={key:0,ref:"echars",style:{height:"500px"}};function Q(c,d,i,o,r,s){return o.refreshCache?(y(),I("div",V,null,512)):k("",!0)}const T=b(S,[["render",Q]]);const U={components:{PageHeader:w,EChars:T},setup(){const c=new Date;c.setHours(0,0,0,0);const d=new Array(7).fill(null).map((s,n)=>{const e=new Date(c.valueOf()-n*1e3*60*60*24);return h(e,"yyyy-MM-dd")}).reverse(),i=[],o=f(null),r=f(null);return N().then(s=>{const n=s.sort((e,l)=>e.accessInfo.length-l.accessInfo.length);s=s.map(e=>({...e,accessInfo:e.accessInfo.filter(l=>!["/user/knock","/blog/link","/system/version"].includes(l.requestInfo.url))}));for(const{uuid:e,accessInfo:l}of n)for(const{date:p}of l){const a=new Date(p),u=d.findIndex(t=>h(a,"yyyy-MM-dd")===t);i[u]||(i[u]=[]),i[u].includes(e)||i[u].push(e)}o.value={title:{text:"独立访客人数"},tooltip:{trigger:"axis",confine:!0},xAxis:{type:"category",boundaryGap:!1,data:d},yAxis:{type:"value"},series:[{name:"人数",type:"line",data:i.map(e=>e.length)}]},r.value={title:{text:"各访客访问情况"},tooltip:{trigger:"axis",confine:!0,axisPointer:{type:"shadow"},formatter:e=>{const l=e[0].data,p=Object.keys(l.tagCount).sort((t,m)=>t.length-m.length)[0],a={};for(const t of l.accessInfo)a[`${t.requestInfo.method} ${t.requestInfo.url}`]===void 0&&(a[`${t.requestInfo.method} ${t.requestInfo.url}`]=0),a[`${t.requestInfo.method} ${t.requestInfo.url}`]++;const u=Object.keys(a).sort((t,m)=>a[m]-a[t]).map(t=>`<div>${a[t]}次 ${t}</div>`).join("");return`
              <div style="font-weight: bold;">${p}</div>
              <div style="font-weight: bold;">请求次数：${l.value}次</div>
              ${u}
            `}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:s.map(e=>e.uuid),axisLabel:{formatter:function(e,l){const p=s.find(a=>a.uuid===e);return Object.keys(p.tagCount).sort((a,u)=>a.length-u.length)[0]}}},series:[{name:"访问次数排名",type:"bar",label:{show:!0},data:s.map(e=>({...e,name:e.uuid,value:e.accessInfo.length}))}]}}),{option1:o,option2:r}}},X={class:"page"};function Y(c,d,i,o,r,s){const n=x("PageHeader"),e=x("EChars");return y(),I("div",X,[$(n),$(e,{option:o.option1,style:{height:"500px"}},null,8,["option"]),o.option2?(y(),B(e,{key:0,option:o.option2,style:G({height:`${o.option2.yAxis.data.length*50+100}px`})},null,8,["option","style"])):k("",!0)])}const te=b(U,[["render",Y],["__scopeId","data-v-d182d204"]]);export{te as default};