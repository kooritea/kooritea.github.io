import{cg as d,aR as r,aS as c,aT as b,bB as F,bC as v,bA as h,bD as f,bx as p,bw as k,bR as V,a_ as w,b_ as C,bs as P,cY as j,cZ as R,c4 as B,bu as A,cn as D}from"./vendor-a6581121.js";import{_ as I}from"./index-9eb66e63.js";import"./highlightjs-4914df6f.js";import"./element-plus-5d967f66.js";const K={props:{modelValue:{type:[Array,String,Number,Boolean,Object],default:()=>""},easyFormItemScope:{type:[Object],default:()=>({})}},emits:["update:modelValue"],data(){return{showPicker:!1,isCheckAll:!1,isIndeterminate:!1,searchKeyWord:"",createdOption:[]}},computed:{columns(){return[this.easyFormItemScope.getPropValue(this.easyFormItemScope.field.required)?"":{text:"未选择",value:void 0,isClear:!0},...this.options2columns(this.checkOptions)].filter(o=>!!o)},checkOptions(){let o=this.easyFormItemScope.options;return this.easyFormItemScope.getFormProps("allowCreate")&&(o=[...this.createdOption,...o]),this.easyFormItemScope.getFormProps("remote")?o:this.easyFormItemScope.getFormProps("filterable")?o.filter(e=>!this.searchKeyWord||e.label.includes(this.searchKeyWord)||e.value.includes(this.searchKeyWord)):o},showCheckAll(){return this.checkOptions.length<5?!1:this.easyFormItemScope.field.checkAllMethod!==!1}},methods:{checkAll(){this.easyFormItemScope.field.checkAllMethod?this.easyFormItemScope.field.checkAllMethod(this.easyFormItemScope,this.checkOptions):this.$refs.checkAllCheckbox.toggle()},options2columns(o){return o.filter(e=>e.show!==!1).map(e=>{const t={...e,text:e.label};return Array.isArray(t.children)&&(t.children=this.options2columns(t.children)),t})},onPickConfirm({selectedOptions:o}){this.showPicker=!1,this.$emit("update:modelValue",o[0].value)},createOption(){this.createdOption.push({label:this.searchKeyWord,value:this.searchKeyWord,isCreate:!0}),this.searchKeyWord=""}}},W=o=>(j("data-v-56425af0"),o=o(),R(),o),M={key:0,class:"placeholder"},N={key:1,class:"popup-handler"},T={key:0,class:"picker-head"},E={class:"title"},z={key:2},Y=W(()=>b("div",{class:"check-all-margin"},null,-1)),q={key:4,class:"create-box"};function H(o,e,t,m,l,s){const y=d("van-search"),i=d("van-checkbox"),n=d("van-cell"),S=d("van-cell-group"),O=d("van-checkbox-group"),x=d("van-picker"),L=d("van-button"),U=d("van-popup");return r(),c("div",{class:P(["vant-select",{"is-disabled":t.easyFormItemScope.disabled}])},[b("div",{class:"select-inner",onClick:e[0]||(e[0]=()=>{t.easyFormItemScope.disabled||(l.showPicker=!0)})},[F(v(t.easyFormItemScope.viewValue)+" ",1),(t.easyFormItemScope.isMultipleValue?t.modelValue.length===0:!t.modelValue)?(r(),c("div",M,v(t.easyFormItemScope.placeholder),1)):h("",!0),t.easyFormItemScope.disabled?h("",!0):(r(),c("div",N," 选择 "))]),f(U,{show:l.showPicker,"onUpdate:show":e[13]||(e[13]=a=>l.showPicker=a),position:"bottom"},{default:p(()=>[t.easyFormItemScope.isMultipleValue?(r(),c("div",T,[b("span",E,v(t.easyFormItemScope.placeholder),1),b("span",{class:"confirm",onClick:e[1]||(e[1]=()=>{l.showPicker=!1})},"确认")])):h("",!0),t.easyFormItemScope.getFormProps("filterable")?(r(),k(y,{key:1,modelValue:l.searchKeyWord,"onUpdate:modelValue":[e[2]||(e[2]=a=>l.searchKeyWord=a),e[3]||(e[3]=a=>{var u;(u=t.easyFormItemScope.getFormProps("remoteMethod"))==null||u(a)})],shape:"round",placeholder:"请输入搜索关键词"},null,8,["modelValue"])):h("",!0),t.easyFormItemScope.isMultipleValue?(r(),c("div",z,[s.showCheckAll?(r(),k(n,{key:0,clickable:"",title:"全选",onClick:e[7]||(e[7]=()=>{s.checkAll()})},{"right-icon":p(()=>[f(i,{ref:"checkAllCheckbox",modelValue:l.isCheckAll,"onUpdate:modelValue":e[4]||(e[4]=a=>l.isCheckAll=a),indeterminate:l.isIndeterminate,onClick:e[5]||(e[5]=V(()=>{},["stop"])),onChange:e[6]||(e[6]=a=>{if(a){const u=s.checkOptions.filter(_=>!_.disabled&&_.show!==!1).map(_=>_.value);o.$emit("update:modelValue",u)}else o.$emit("update:modelValue",[]);l.isIndeterminate=!1})},null,8,["modelValue","indeterminate"])]),_:1})):h("",!0),Y,f(O,{"model-value":t.modelValue,"onUpdate:modelValue":e[9]||(e[9]=a=>{o.$emit("update:modelValue",a)}),onChange:e[10]||(e[10]=a=>{const u=a.length,_=s.checkOptions.filter(g=>!g.disabled&&g.show!==!1).length;l.isCheckAll=u===_,l.isIndeterminate=u>0&&u<_})},{default:p(()=>[f(S,null,{default:p(()=>[(r(!0),c(w,null,C(s.checkOptions,a=>(r(),k(n,{key:a._key,clickable:"",title:a.label,onClick:()=>{t.modelValue.includes(a.value)?o.$emit("update:modelValue",t.modelValue.filter(u=>a.value!==u)):o.$emit("update:modelValue",[...t.modelValue,a.value])}},{"right-icon":p(()=>[f(i,{name:a.value,disabled:a.disabled,onClick:e[8]||(e[8]=V(()=>{},["stop"]))},null,8,["name","disabled"])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["model-value"])])):(r(),k(x,{key:3,title:t.easyFormItemScope.placeholder,columns:s.columns,loading:t.easyFormItemScope.optionsLoading,onConfirm:s.onPickConfirm,onCancel:e[11]||(e[11]=a=>l.showPicker=!1)},null,8,["title","columns","loading","onConfirm"])),t.easyFormItemScope.getFormProps("allowCreate")&&l.searchKeyWord&&s.checkOptions.length===0?(r(),c("div",q,[f(L,{type:"primary",block:"",onClick:e[12]||(e[12]=()=>{s.createOption()})},{default:p(()=>[F(" 点击添加选项 ")]),_:1})])):h("",!0)]),_:1},8,["show"])],2)}const Z=I(K,[["render",H],["__scopeId","data-v-56425af0"]]);const G={props:{modelValue:{type:[Array,String,Number,Boolean,Object],default:()=>""},easyFormItemScope:{type:[Object],default:()=>({})}},emits:["update:modelValue"],data(){return{showPicker:!1}},computed:{currentDate(){let o=new Date(this.modelValue);return o=isNaN(o.valueOf())?new Date:o,[o.getFullYear(),o.getMonth(),o.getDate()]}},methods:{onConfirm({selectedOptions:o}){this.showPicker=!1;const e=new Date(o.map(m=>m.value).join("-")),t=this.easyFormItemScope.getFormProps("valueFormat");t?this.$emit("update:modelValue",B(e).format(t)):this.$emit("update:modelValue",e)}}},J={key:0,class:"placeholder"},Q={key:1,class:"popup-handler"};function X(o,e,t,m,l,s){const y=d("van-date-picker"),i=d("van-popup");return r(),c("div",{class:P(["vant-date-picker",{"is-disabled":t.easyFormItemScope.disabled}])},[b("div",{class:"date-picker-inner",onClick:e[0]||(e[0]=()=>{t.easyFormItemScope.disabled||(l.showPicker=!0)})},[F(v(t.easyFormItemScope.viewValue)+" ",1),t.modelValue?h("",!0):(r(),c("div",J,v(t.easyFormItemScope.placeholder),1)),t.easyFormItemScope.disabled?h("",!0):(r(),c("div",Q," 选择 "))]),f(i,{show:l.showPicker,"onUpdate:show":e[2]||(e[2]=n=>l.showPicker=n),position:"bottom"},{default:p(()=>[f(y,{modelValue:s.currentDate,title:"选择日期",onConfirm:s.onConfirm,onCancel:e[1]||(e[1]=n=>l.showPicker=!1)},null,8,["modelValue","onConfirm"])]),_:1},8,["show"])],2)}const $=I(G,[["render",X],["__scopeId","data-v-a34a1370"]]);const ee={props:{modelValue:{type:[Array,String,Number,Boolean,Object],default:()=>""},easyFormItemScope:{type:[Object],default:()=>({})}},emits:["update:modelValue"]};function te(o,e,t,m,l,s){const y=d("van-radio"),i=d("van-radio-group");return r(),k(i,A({"model-value":t.modelValue,disabled:t.easyFormItemScope.disabled},{...t.easyFormItemScope.getPropValue(t.easyFormItemScope.field.formProps)||{}},{"onUpdate:modelValue":e[0]||(e[0]=n=>{o.$emit("update:modelValue",n)})}),{default:p(()=>[(r(!0),c(w,null,C(t.easyFormItemScope.options,n=>(r(),k(y,{key:n.key||n.value,name:n.value,disabled:n.disabled},{default:p(()=>[F(v(n.label),1)]),_:2},1032,["name","disabled"]))),128))]),_:1},16,["model-value","disabled"])}const oe=I(ee,[["render",te],["__scopeId","data-v-02da4bf5"]]),le={props:{fileList:{type:[Array],default:()=>[]},onChange:{type:Function,default:()=>{}},onRemove:{type:Function,default:()=>{}},easyFormItemScope:{type:[Object],default:()=>({})}},emits:["update:modelValue"],data(){return{vantFileList:[]}},watch:{fileList:{deep:!0,handler(o){Promise.all(o.map(async e=>({...e,file:e.file||e.raw,content:e.content?e.content:await this.blobToBase64(e.file||e.raw),objectUrl:e.objectUrl?e.objectUrl:URL.createObjectURL(e.file||e.raw)}))).then(e=>{this.vantFileList=e})}}},methods:{formatFileList(o){return o},filelist2ElStyle(o){return o.map(e=>({...e,name:e.file.name,raw:e.file,size:e.file.size,url:e.url?e.url:URL.createObjectURL(e.file)}))},blobToBase64(o){return new Promise((e,t)=>{const m=new FileReader;m.onload=l=>{e(l.target.result)},m.onerror=l=>{t(new Error("blobToBase64 error"))},m.readAsDataURL(o)})}}};function ae(o,e,t,m,l,s){const y=d("van-uploader");return r(),k(y,A({"model-value":l.vantFileList,"after-read":(i,n)=>{t.onChange(i,s.filelist2ElStyle([...t.fileList,...Array.isArray(i)?i:[i]]))},"before-delete":(i,n)=>{t.onRemove(i,t.fileList.filter(S=>S!==i))}},{maxCount:t.easyFormItemScope.getFormProps("limit")??1/0,...t.easyFormItemScope.getPropValue(t.easyFormItemScope.field.formProps)||{}},D(t.easyFormItemScope.getPropValue(t.easyFormItemScope.field.formListeners)||{})),null,16,["model-value","after-read","before-delete"])}const re=I(le,[["render",ae]]),ce={select:Z,"date-picker":$,radio:oe,upload:re};export{ce as default};