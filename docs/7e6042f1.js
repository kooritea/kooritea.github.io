import{_ as v,L as u,u as k,a as d,a1 as I,b as m,d as t,e as a,p as x,h as s,F as f,E as R,g as r,t as i,f as h,w as L,n as C}from"./assets/index-207a969d.js";import{P as w}from"./95227df1.js";const O={components:{PageHeader:w,LoadingIcon:u},setup(){const{routeLoading:l}=k(),n=d([{path:"/great-old-one/chaos",name:"编写随笔"},{path:"/great-old-one/revelation",name:"浏览日志"},{path:"/great-old-one/mabinogion",name:"处理待办"},{path:"/great-old-one/deathnote",name:"文件管理"},{path:"/great-old-one/pastel-memories",name:"番剧管理"},{path:"/great-old-one/waifu",name:"waifu管理"},{path:"/great-old-one/analytics",name:"分析统计"},{path:"/great-old-one/online-device",name:"在线设备"},{path:"/great-old-one/mpush",name:"消息推送"},{path:"/great-old-one/meta",name:"元数据"},{name:"Ryona",children:[{name:"切片管理",path:"/great-old-one/ryona/material"},{name:"集合管理",path:"/great-old-one/ryona/group"},{name:"新建切片",path:"/great-old-one/ryona/material/create"}]}]),_=d({menus:n,parents:[]}),e=d({});return I().then(c=>{Object.assign(e,c),e.dateDiff=new Date(c.date).valueOf()-Date.now()}),{routeLoading:l,activeRoutes:_,systemInfo:e}}},P={class:"page"},D={class:"route-list"},B={class:"text"},b=["onClick"],H={class:"text"},N={class:"system-info"},V={key:0,class:"system-info-item"},E={key:1,class:"system-info-item"},F={key:2,class:"system-info-item"},G={key:3,class:"system-info-item"};function S(l,n,_,e,c,j){const p=m("PageHeader"),g=m("LoadingIcon"),y=m("router-link");return t(),a("div",P,[x(p),s("div",D,[(t(!0),a(f,null,R(e.activeRoutes.menus,o=>(t(),a(f,{key:o.path},[o.path?(t(),h(y,{key:0,to:o.path},{default:L(()=>[s("div",{class:C(["route",{loading:e.routeLoading===o.path}])},[s("span",B,i(o.name),1),e.routeLoading===o.path?(t(),h(g,{key:0})):r("",!0)],2)]),_:2},1032,["to"])):(t(),a("div",{key:1,class:"route",onClick:()=>{e.activeRoutes.parents=e.activeRoutes.menus,e.activeRoutes.menus=o.children}},[s("span",H,i(o.name),1)],8,b))],64))),128)),e.activeRoutes.parents.length>0?(t(),a("div",{key:0,class:"route",onClick:n[0]||(n[0]=()=>{e.activeRoutes.menus=e.activeRoutes.parents,e.activeRoutes.parents=[]})},n[1]||(n[1]=[s("span",{class:"text"},"返回",-1)]))):r("",!0)]),s("div",N,[e.systemInfo.free?(t(),a("div",V," 分配给进程执行的总内存: "+i(e.systemInfo.free.rss),1)):r("",!0),e.systemInfo.free?(t(),a("div",E," 分配的堆的总大小: "+i(e.systemInfo.free.heapTotal),1)):r("",!0),e.systemInfo.free?(t(),a("div",F," 在执行过程中使用的实际内存: "+i(e.systemInfo.free.heapUsed),1)):r("",!0),e.systemInfo.date?(t(),a("div",G," 与本地时间相差: "+i(e.systemInfo.dateDiff)+"ms ",1)):r("",!0)])])}const T=v(O,[["render",S],["__scopeId","data-v-4067e58d"]]);export{T as default};