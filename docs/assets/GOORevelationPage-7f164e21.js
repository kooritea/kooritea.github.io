import{_ as g,A as k,L as S,S as C,u as L,f as B,z as H}from"./index-6dfeff5e.js";import{P as I}from"./PageHeader-e97f8a21.js";import{b7 as V,bH as M,cf as i,aQ as a,aR as o,bC as r,aS as d,bw as b,bz as t,aZ as w,bZ as A,bA as u,br as f,bB as c,bv as P}from"./vendor-23d2f8cc.js";import"./element-plus-88343e01.js";import"./highlightjs-4914df6f.js";const z={components:{AsyncButtom:k,PageHeader:I,LoadingIcon:S,SvgIcon:C},setup(){const l=V(!1),n=M([]),{mobileMode:p}=L(),s=()=>{var _;return H((_=n==null?void 0:n[0])==null?void 0:_.uuid,l.value?"1":"0").then(m=>{n.unshift(...m)})};return s(),{isShowVerbose:l,load:s,logs:n,formatDate:B,mobileMode:p}}},N={class:"page"},O={class:"handlers"},D={class:"log-box"},R={key:0,class:"loading-box"},j=["onClick"],G={class:"message"},Z={class:"datetime"},E={key:0,class:"context"},F={class:"title"},Q={key:1,class:"append"},T={key:3,class:"collection-flag"},q={key:0,class:"expand"};function J(l,n,p,s,_,m){const v=i("PageHeader"),h=i("AsyncButtom"),y=i("LoadingIcon"),x=i("SvgIcon");return a(),o("div",N,[r(v),d("div",O,[r(h,{onLoadingClick:s.load,type:"primary"},{default:b(()=>[u(" 加载更多 ")]),_:1},8,["onLoadingClick"]),r(h,{onLoadingClick:()=>(s.isShowVerbose=!s.isShowVerbose,s.logs.splice(0,s.logs.length),s.load()),type:s.isShowVerbose?"primary":"default"},{default:b(()=>[u(" 显示verbose日志 ")]),_:1},8,["onLoadingClick","type"])]),d("div",D,[s.logs.length===0?(a(),o("div",R,[r(y)])):t("",!0),(a(!0),o(w,null,A(s.logs,e=>(a(),o("div",{key:e.uuid,class:f(["log",{[e.level]:!0,"can-expand":!!e.desp}]),onClick:K=>e.expand=!e.expand},[d("div",G,[d("span",Z,c(s.formatDate(e.date,s.mobileMode&!e.expand?"MM-dd HH:mm:ss":"yyyy-MM-dd HH:mm:ss")),1),!s.mobileMode||e.expand?(a(),o("span",E,"["+c(e.context.join("->"))+"]",1)):t("",!0),d("span",F,c(e.message),1),e.appendStr.length>0?(a(),o("span",Q,"......"+c(e.appendStr.join(",")),1)):t("",!0),e.desp?(a(),P(x,{key:2,name:"zhankai1",class:f({"is-expand":e.expand})},null,8,["class"])):t("",!0),e.collection.length>0?(a(),o("span",T," +"+c(e.collection.length),1)):t("",!0)]),e.expand?(a(),o("div",q,c(e.desp),1)):t("",!0)],10,j))),128))])])}const ee=g(z,[["render",J],["__scopeId","data-v-86bfeb23"]]);export{ee as default};