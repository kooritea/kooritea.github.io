import{P as u}from"./PageHeader-56066d73.js";import{M as p}from"./MDEditor-2aa31739.js";import{_ as f,M as r}from"./index-8afe2753.js";import{x as _}from"./GreatOldOne-395b41b1.js";import{b2 as g,ch as n,aP as h,aQ as b,bo as s}from"./vendor-b07f99b0.js";import"./MarkDown-1a551a43.js";import"./ImageCon-705b8248.js";import"./element-plus-966ba156.js";import"./highlightjs-4914df6f.js";const v={components:{PageHeader:u,MDEditor:p},setup(){const o=JSON.stringify({bid:0,ep:0,start:"",end:0,tag:"",sourcePath:"",thumbnail:"",previews:""},void 0,2),e=g("");return{requestData:e,formatButton:{name:"格式化",handler:()=>{try{e.value=JSON.stringify(JSON.parse(e.value),void 0,2)}catch{r.error("格式化失败")}}},resetLast:{name:"导入上一条",handler:()=>{e.value=localStorage.getItem("ryona-last")}},onSubmit:a=>_(JSON.parse(a)).then(()=>{localStorage.setItem("ryona-last",a),r.success("提交成功")}),defaultValue:o}}},y={class:"page"};function S(o,e,l,t,d,a){const i=n("PageHeader"),m=n("MDEditor");return h(),b("div",y,[s(i),s(m,{ref:"whiteEditor",modelValue:t.requestData,"onUpdate:modelValue":e[0]||(e[0]=c=>t.requestData=c),"ex-handlers":[t.formatButton,t.resetLast],cache:"ryona","default-value":t.defaultValue,"show-default-handlers":["reset","clean","submit"],"on-submit":t.onSubmit},null,8,["modelValue","ex-handlers","default-value","on-submit"])])}const J=f(v,[["render",S],["__scopeId","data-v-79801249"]]);export{J as default};