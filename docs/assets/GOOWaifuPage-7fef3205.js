import{P as g}from"./PageHeader-56066d73.js";import{k as y,l as b,p as v}from"./element-plus-966ba156.js";import{_ as h,j as w,T as D,A as U,o as x}from"./index-8afe2753.js";import{b2 as P,aY as k,aW as p,ch as r,aP as V,bv as I,bu as s,bo as n,bl as A,bx as B,bj as O,aQ as M,aR as N,by as _}from"./vendor-b07f99b0.js";import{q as j}from"./GreatOldOne-395b41b1.js";import"./highlightjs-4914df6f.js";const S={components:{ElUpload:y,ElIcon:b,Plus:v},props:{modelValue:{type:[Object,Array],default:()=>{}},limit:{type:Number,default:()=>1},width:{type:[String,Number],default:()=>148},height:{type:[String,Number],default:()=>148},beforeUpload:{type:Function,default:void 0}},emits:["update:modelValue"],setup(t,{emit:a}){const l=P(null),{computedModelValue:e}=w(t,a);return k(e,i=>{(!i||Array.isArray(i)&&i.length===0)&&l.value.clearFiles()}),{uploader:l,computedModelValue:e,csswidth:p(()=>typeof t.width=="number"?`${t.width}px`:t.width),cssheight:p(()=>typeof t.width=="number"?`${t.height}px`:t.height)}},methods:{onPreview(t){this.$imagePreview(URL.createObjectURL(t.raw))}}};function T(t,a,l,e,i,u){const f=r("Plus"),c=r("el-icon"),d=r("el-upload");return V(),I(d,{ref:"uploader",class:A(["image-uploader",{limit:l.limit===1&&e.computedModelValue||l.limit>1&&Array.isArray(e.computedModelValue)&&e.computedModelValue.length===l.limit}]),style:B(`--el-upload-list-picture-card-size-width: ${e.csswidth};--el-upload-list-picture-card-size-height: ${e.cssheight};`),"auto-upload":!1,action:"","list-type":"picture-card",limit:l.limit,"on-remove":(m,o)=>{e.computedModelValue=l.limit>1?o:void 0},"before-upload":l.beforeUpload,"on-change":(m,o)=>{e.computedModelValue=l.limit>1?o:m},"on-preview":u.onPreview},{default:s(()=>[n(c,null,{default:s(()=>[n(f)]),_:1})]),_:1},8,["class","style","limit","on-remove","before-upload","on-change","on-preview"])}const z=h(S,[["render",T],["__scopeId","data-v-28037e6b"]]);const C={components:{PageHeader:g,ImageUploader:z,TextInput:D,AsyncButtom:U},setup(){return{formData:O({})}},methods:{onSubmit(){var t,a;return j({...this.formData,avatar:(t=this.formData.avatar)==null?void 0:t.raw,tachie:(a=this.formData.tachie)==null?void 0:a.raw}).then(()=>this.clean())},clean(){x(this.formData)}}},W={class:"page"};function E(t,a,l,e,i,u){const f=r("PageHeader"),c=r("ImageUploader"),d=r("TextInput"),m=r("AsyncButtom");return V(),M("div",W,[n(f),n(c,{modelValue:e.formData.avatar,"onUpdate:modelValue":a[0]||(a[0]=o=>e.formData.avatar=o)},null,8,["modelValue"]),n(c,{modelValue:e.formData.tachie,"onUpdate:modelValue":a[1]||(a[1]=o=>e.formData.tachie=o),width:100,height:200},null,8,["modelValue"]),n(d,{modelValue:e.formData.name,"onUpdate:modelValue":a[2]||(a[2]=o=>e.formData.name=o),placeholder:"名字"},null,8,["modelValue"]),n(d,{modelValue:e.formData.source,"onUpdate:modelValue":a[3]||(a[3]=o=>e.formData.source=o),placeholder:"出处"},null,8,["modelValue"]),n(d,{modelValue:e.formData.cv,"onUpdate:modelValue":a[4]||(a[4]=o=>e.formData.cv=o),placeholder:"cv"},null,8,["modelValue"]),n(d,{modelValue:e.formData.link,"onUpdate:modelValue":a[5]||(a[5]=o=>e.formData.link=o),placeholder:"链接"},null,8,["modelValue"]),N("div",null,[n(m,{type:"primary","on-click":u.onSubmit},{default:s(()=>[_(" 提交 ")]),_:1},8,["on-click"]),n(m,{type:"default","on-click":u.clean},{default:s(()=>[_(" 清除 ")]),_:1},8,["on-click"])])])}const Q=h(C,[["render",E],["__scopeId","data-v-d2d9c815"]]);export{Q as default};