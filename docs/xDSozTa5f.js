import{_ as M,a6 as C,a7 as E,r as B,K as L,k as s,d as m,w as d,b as p,E as F,p as r,e as k,l as b,F as O,j as n,A as I,L as P,a as v,a8 as x,Z as S,a9 as R,f as j}from"./assets/index-DIlfZo-L.js";import{P as A}from"./xCtrgDw11.js";import{M as G}from"./xCIWLBdfa.js";/* empty css         */import{E as q,a as N}from"./xDKvBgHRV.js";import{E as U,a as H,b as K,c as T}from"./xvmtp3EA8.js";/* empty css         *//* empty css         */import"./vander_baseClone-C8fApq0L.js";import"./xsKpNO0pI.js";import"./vander_initCloneObject-CwsVGlNs.js";import"./x9Brqpgxm.js";import"./xBFwBdoqd.js";import"./xCwqHLPY7.js";import"./xCbGJyxbr.js";const z={components:{ElForm:q,ElFormItem:N,ElInput:C,ElRadioGroup:U,ElRadio:H,ButtonBox:E},props:{modelValue:{type:Object,default:()=>({})},fields:{type:Array,default:()=>[]},onSubmit:{type:Function,default:void 0}},emits:["update:modelValue"],setup(a,{emit:e}){const i=B(null),{computedModelValue:o}=L(a,e);return{computedModelValue:o,handlers:[{name:"提交",type:"primary",handler:()=>new Promise(u=>{i.value.validate((c,_)=>{c&&(typeof a.onSubmit=="function"?u(a.onSubmit(o.value)):u())})})}],form:i}}};function Z(a,e,i,o,g,u){const c=n("el-input"),_=n("el-radio"),w=n("el-radio-group"),f=n("el-form-item"),V=n("ButtonBox"),y=n("el-form");return s(),m(y,{ref:"form",model:o.computedModelValue,"label-position":"top"},{default:d(()=>[(s(!0),p(O,null,F(i.fields,l=>(s(),p("div",{key:l.prop},[r(f,{label:l.label,prop:l.prop,required:l.required},{default:d(()=>[l.type==="input"?(s(),m(c,{key:0,modelValue:o.computedModelValue[l.prop],"onUpdate:modelValue":t=>o.computedModelValue[l.prop]=t},null,8,["modelValue","onUpdate:modelValue"])):k("",!0),l.type==="boolean"?(s(),m(w,{key:1,modelValue:o.computedModelValue[l.prop],"onUpdate:modelValue":t=>o.computedModelValue[l.prop]=t},{default:d(()=>[r(_,{border:"",value:!0},{default:d(()=>e[0]||(e[0]=[b(" 是 ")])),_:1}),r(_,{border:"",value:!1},{default:d(()=>e[1]||(e[1]=[b(" 否 ")])),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])):k("",!0)]),_:2},1032,["label","prop","required"])]))),128)),o.handlers.length>0?(s(),m(V,{key:0,handlers:o.handlers},null,8,["handlers"])):k("",!0)]),_:1},8,["model"])}const D=M(z,[["render",Z]]),J={components:{AsyncButtom:I,PageHeader:A,Markdown:G,GOOMabinogionFields:D,ElTable:K,ElTableColumn:T,LoadingIcon:P},setup(){const a=v([]),e=v([]),i=B(!0),o=()=>(i.value=!0,R().then(g=>{e.splice(0,e.length),e.push(...g);for(const u of e)u.fields.length<5&&a.push(u.uuid)}).finally(()=>{i.value=!1}));return o(),{loading:i,expandRowKeys:a,realtodos:e,load:o}},methods:{onSubmit(a,e){return x(a.row.uuid,{type:"resolve",data:e}).then(()=>(S.success("处理成功"),this.load()))},reject(a,e){return x(a.row.uuid,{type:"reject",reason:e.inputValue}).then(()=>this.load())}}},Q={class:"page"},W={key:1},X={class:"preview"},Y={key:0,class:"desp"},$={key:1,class:"quick-boolean"};function ee(a,e,i,o,g,u){const c=n("PageHeader"),_=n("LoadingIcon"),w=n("Markdown"),f=n("AsyncButtom"),V=n("GOOMabinogionFields"),y=n("el-table-column"),l=n("el-table");return s(),p("div",Q,[r(c),r(l,{border:"",data:o.realtodos,style:{width:"100%"},"row-key":"uuid","expand-row-keys":o.expandRowKeys},{empty:d(()=>[o.loading?(s(),m(_,{key:0})):(s(),p("span",W," 暂无数据 "))]),default:d(()=>[r(y,{type:"expand"},{default:d(t=>[j("div",X,[t.row.desp?(s(),p("div",Y,[r(w,{"model-value":t.row.desp},null,8,["model-value"])])):k("",!0),t.row.fields.length===1&&t.row.fields[0].type==="boolean"?(s(),p("div",$,[r(f,{type:"primary",onLoadingClick:()=>u.onSubmit(t,{[t.row.fields[0].prop]:!0})},{default:d(()=>e[0]||(e[0]=[b(" 是 ")])),_:2},1032,["onLoadingClick"]),r(f,{type:"default",onLoadingClick:()=>u.onSubmit(t,{[t.row.fields[0].prop]:!1})},{default:d(()=>e[1]||(e[1]=[b(" 否 ")])),_:2},1032,["onLoadingClick"])])):(s(),m(V,{key:2,fields:t.row.fields,"on-submit":h=>u.onSubmit(t,h)},null,8,["fields","on-submit"]))])]),_:1}),r(y,{prop:"name",label:"描述"}),r(y,{label:"操作",width:"120px"},{default:d(t=>[r(f,{type:"danger",size:"mini",onLoadingClick:h=>u.reject(t,h),confirm:{showInput:!0,message:"请输入拒绝原因"}},{default:d(()=>e[2]||(e[2]=[b(" 拒绝 ")])),_:2},1032,["onLoadingClick"])]),_:1})]),_:1},8,["data","expand-row-keys"])])}const ye=M(J,[["render",ee],["__scopeId","data-v-2b1c8f98"]]);export{ye as default};