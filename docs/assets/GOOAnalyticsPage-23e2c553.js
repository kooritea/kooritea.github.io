import{P as w}from"./PageHeader-e97f8a21.js";import{_ as b,u as O,n as A,f as h,P as C}from"./index-6dfeff5e.js";import{u as P,i as q,a as M,b as z,c as E,d as j,e as D,f as H,g as v}from"./echarts-5c9024e6.js";import{b7 as f,b3 as L,bd as B,b1 as _,aQ as m,aR as I,bz as k,bi as g,cf as x,bC as $,bv as G,bs as N}from"./vendor-23d2f8cc.js";import"./element-plus-88343e01.js";import"./highlightjs-4914df6f.js";P([q,M,z,E,j,D,H]);const S={props:{option:{type:Object,default:()=>({})}},setup(c,{emit:d}){const i=f(!0),{darkMode:s}=O(),{computedOption:r}=A(c,d),o=f(null);let n;const e=()=>{n&&r.value&&n.resize()};return L(()=>{n=v(o.value,s.value?"dark":void 0),r.value&&n.setOption(r.value),window.addEventListener("resize",e)}),B(()=>{window.removeEventListener("resize",e)}),_(r,()=>{n&&r.value&&n.setOption(r.value)}),_(s,()=>{i.value=!1,g(()=>{i.value=!0,g(()=>{n=v(o.value,s.value?"dark":void 0),n.setOption(r.value)})})}),{echars:o,refreshCache:i}}},V={key:0,ref:"echars",style:{height:"500px"}};function Q(c,d,i,s,r,o){return s.refreshCache?(m(),I("div",V,null,512)):k("",!0)}const R=b(S,[["render",Q]]);const T={components:{PageHeader:w,EChars:R},setup(){const c=new Date;c.setHours(0,0,0,0);const d=new Array(7).fill(null).map((o,n)=>{const e=new Date(c.valueOf()-n*1e3*60*60*24);return h(e,"yyyy-MM-dd")}).reverse(),i=[],s=f(null),r=f(null);return C().then(o=>{const n=o.sort((e,l)=>e.accessInfo.length-l.accessInfo.length);o=o.map(e=>({...e,accessInfo:e.accessInfo.filter(l=>!["/user/knock","/blog/link","/system/version"].includes(l.requestInfo.url))}));for(const{uuid:e,accessInfo:l}of n)for(const{date:p}of l){const a=new Date(p),u=d.findIndex(t=>h(a,"yyyy-MM-dd")===t);i[u]||(i[u]=[]),i[u].includes(e)||i[u].push(e)}s.value={title:{text:"独立访客人数"},tooltip:{trigger:"axis",confine:!0},xAxis:{type:"category",boundaryGap:!1,data:d},yAxis:{type:"value"},series:[{name:"人数",type:"line",data:i.map(e=>e.length)}]},r.value={title:{text:"各访客访问情况"},tooltip:{trigger:"axis",confine:!0,axisPointer:{type:"shadow"},formatter:e=>{const l=e[0].data,p=Object.keys(l.tagCount).sort((t,y)=>t.length-y.length)[0],a={};for(const t of l.accessInfo)a[`${t.requestInfo.method} ${t.requestInfo.url}`]===void 0&&(a[`${t.requestInfo.method} ${t.requestInfo.url}`]=0),a[`${t.requestInfo.method} ${t.requestInfo.url}`]++;const u=Object.keys(a).sort((t,y)=>a[y]-a[t]).map(t=>`<div>${a[t]}次 ${t}</div>`).join("");return`
              <div style="font-weight: bold;">${p}</div>
              <div style="font-weight: bold;">请求次数：${l.value}次</div>
              ${u}
            `}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:o.map(e=>e.uuid),axisLabel:{formatter:function(e,l){const p=o.find(a=>a.uuid===e);return Object.keys(p.tagCount).sort((a,u)=>a.length-u.length)[0]}}},series:[{name:"访问次数排名",type:"bar",label:{show:!0},data:o.map(e=>({...e,name:e.uuid,value:e.accessInfo.length}))}]}}),{option1:s,option2:r}}},U={class:"page"};function X(c,d,i,s,r,o){const n=x("PageHeader"),e=x("EChars");return m(),I("div",U,[$(n),$(e,{option:s.option1,style:{height:"500px"}},null,8,["option"]),s.option2?(m(),G(e,{key:0,option:s.option2,style:N({height:`${s.option2.yAxis.data.length*50+100}px`})},null,8,["option","style"])):k("",!0)])}const ee=b(T,[["render",X],["__scopeId","data-v-d182d204"]]);export{ee as default};