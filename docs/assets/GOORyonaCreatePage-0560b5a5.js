import{P as E}from"./PageHeader-e28ae34c.js";import{_ as U,A as C,a4 as V,a2 as I,a5 as u,M as k,a6 as B,Z as O,a7 as x,a1 as F}from"./index-a60b1809.js";import{M as N,P as q}from"./MediaBrowser-63490cfb.js";import{cg as l,aR as n,aS as m,bD as p,bx as f,aT as g,bw as A,bA as c,bB as _,bC as b,a_ as L,cY as T,cZ as z}from"./vendor-a6581121.js";import"./element-plus-5d967f66.js";import"./highlightjs-4914df6f.js";const H={components:{PageHeader:E,AsyncButtom:C,MediaBrowser:N,PreviewScreenshots:q},data(){return{previewVideoSrc:"",previewVideoSize:0,needUpdatePreviewVideoSrc:!1,canAutoUpdateEnd:!0,formConfig:{labelPosition:"top"},bangumiOptions:[],editTargetOptions:[],editingProps:[],formData:{},fields:[{type:"switch",label:"编辑模式",prop:"useEditMode",defaultValue:()=>!1,required:!0,dontCheckEdit:!0},{type:"select",label:"编辑目标",prop:"id",showInForm:e=>!!e.formData.useEditMode,required:!0,dontCheckEdit:!0,options:()=>this.editTargetOptions,onCreated:()=>{V().then(e=>{this.editTargetOptions=e.map(a=>({label:a.filepath.slice(1),value:a.id}))})},formProps:{remote:!0,filterable:!0,remoteMethod:e=>{V({keyword:e}).then(a=>{this.editTargetOptions=a.map(r=>({label:r.filepath.slice(1),value:r.id}))})}}},{type:"select",prop:"bid",label:"Bangumi Id",formProps:{remote:!0,filterable:!0,remoteMethod:e=>{e&&I(e).then(a=>{this.bangumiOptions=a.map(r=>({label:r.name||r.nname,subLabel:r.nname,value:r.subject}))})}},options:()=>this.bangumiOptions,required:e=>!e.formData.useEditMode||this.editingProps.includes("bid"),disabled:e=>e.formData.useEditMode&&!this.editingProps.includes("bid")},{type:"number",prop:"ep",label:"集数",formProps:{min:0},required:e=>!e.formData.useEditMode||this.editingProps.includes("ep"),disabled:e=>e.formData.useEditMode&&!this.editingProps.includes("ep")},{type:"slot",prop:"sourcePath",slotName:"fileBrowser",label:"文件",required:!0,onChange:(e,a,r)=>{this.needUpdatePreviewVideoSrc=!0},showInForm:e=>!e.formData.useEditMode},{type:"slot",slotName:"tsSelector",prop:"start",label:"开始时间",afterSlotName:"screenshots",required:!0,defaultValue:()=>"00:00:00.0",onChange:(e,a,r)=>{r&&(this.needUpdatePreviewVideoSrc=!0,this.canAutoUpdateEnd&&(this.formData.end=this.formData.start),this.formData.thumbnail=this.formData.start)},showInForm:e=>!e.formData.useEditMode},{type:"slot",slotName:"tsSelector",prop:"end",label:"结束时间",afterSlotName:"screenshots",required:!0,defaultValue:()=>"00:00:00.0",onChange:(e,a,r)=>{this.needUpdatePreviewVideoSrc=!0,r&&(this.canAutoUpdateEnd=!1)},rules:e=>[{validator:(a,r,i)=>{const o=u(r),d=u(e.formData.start);o<=d?i(`结束时间[${o}]不能小于等于开始时间[${d}]`):i()},trigger:"blur"}],showInForm:e=>!e.formData.useEditMode},{type:"slot",slotName:"previewVideo",hiddenLabel:!0,showInForm:e=>!!e.formData.sourcePath&&!!e.formData.start&&!!e.formData.end},{type:"select",prop:"tag",valueSplitChar:",",formProps:{multiple:!0,filterable:!0,allowCreate:!0},createOptionValidator:(e,a)=>{var r;return(r=a==null?void 0:a.startsWith)!=null&&r.call(a,"#")?!0:(this.$message({type:"warning",message:"tag必须为#开头",duration:5e3}),!1)},optionsBaseCode:"VIDEO_TAG",label:"标签",required:e=>e.formData.useEditMode&&this.editingProps.includes("tag"),disabled:e=>e.formData.useEditMode&&!this.editingProps.includes("tag")},{type:"slot",slotName:"tsSelector",prop:"thumbnail",afterSlotName:"screenshots",formProps:{multiple:!0},label:"封面",rules:e=>[{validator:(a,r,i)=>{const o=u(r),d=u(e.formData.start),h=u(e.formData.end);o===0?i():o<d?i(`封面时间[${o}]不能小于开始时间[${d}]`):o>h?i(`封面时间[${o}]不能大于结束时间[${h}]`):i()},trigger:"submit"}],defaultValue:()=>"00:00:00.0",showInForm:e=>!e.formData.useEditMode},{type:"number",prop:"previews",formProps:{multiple:!0},label:"预览图",showInForm:e=>!e.formData.useEditMode},{type:"switch",prop:"publish",label:"立即发布",defaultValue:()=>!1,showInForm:e=>!e.formData.useEditMode}],buttons:[{type:"primary",label:"提交",handler:(e,a)=>e.formInstance.submitForm().then(r=>(r.useEditMode?this.editMaterial(e,r):this.createMaterial(e,r)).then(()=>{k.success("提交成功"),e.formInstance.resetFormData(),this.editingProps=[],this.previewVideoSrc="",this.previewVideoSize=0,this.needUpdatePreviewVideoSrc=!1,this.canAutoUpdateEnd=!0}))},{label:"恢复上次数据",handler:(e,a)=>{const r=localStorage.getItem("ryona-last");r&&e.formInstance.resetFormData(JSON.parse(r))}}]}},methods:{previewVideo(){return this.needUpdatePreviewVideoSrc=!1,B({sourcePath:this.formData.sourcePath,start:this.formData.start,end:this.formData.end}).then(e=>{this.previewVideoSrc&&URL.revokeObjectURL(this.previewVideoSrc),this.previewVideoSrc=URL.createObjectURL(e),this.previewVideoSize=(e.size/(1024*1024)).toFixed(2)})},createMaterial(e,a){localStorage.setItem("ryona-last",JSON.stringify(a));const r=u(a.start);let i=u(a.thumbnail);i&&(i=Math.max(O.subtract(i,r),0));const o={...a,thumbnail:i};return o.tag||delete o.tag,delete o.useEditMode,x(o)},editMaterial(e,a){const r={};for(const i of this.editingProps)r[i]=a[i];return F(a.id,r)}}},R=e=>(T("data-v-51e57fc4"),e=e(),z(),e),j={class:"page"},G={class:"label-style"},J={key:0,class:"remarks"},Z={key:0,class:"remarks"},W=R(()=>g("span",null,".",-1)),Y={class:"screenshots-video-box"},K={class:"controls"},Q={key:0,class:"size"},X={key:1,class:"tips"},$=["src"];function ee(e,a,r,i,o,d){const h=l("PageHeader"),v=l("el-checkbox"),w=l("MediaBrowser"),P=l("el-time-picker"),S=l("el-input-number"),D=l("PreviewScreenshots"),y=l("AsyncButtom"),M=l("EasyForm");return n(),m("div",j,[p(h),p(M,{modelValue:o.formData,"onUpdate:modelValue":a[0]||(a[0]=t=>o.formData=t),fields:o.fields,buttons:o.buttons,"form-config":o.formConfig},{label:f(t=>[g("div",G,[t.formData.useEditMode&&!t.getPropValue(t.field.dontCheckEdit)?(n(),A(v,{key:0,"model-value":o.editingProps.includes(t.field.prop),"onUpdate:modelValue":s=>{s?o.editingProps.push(t.field.prop):o.editingProps.splice(o.editingProps.indexOf(t.field.prop),1)}},{default:f(()=>[t.getPropValue(t.field.required)?(n(),m("span",J," * ")):c("",!0),_(" "+b(t.field.label),1)]),_:2},1032,["model-value","onUpdate:modelValue"])):(n(),m(L,{key:1},[t.getPropValue(t.field.required)?(n(),m("span",Z," * ")):c("",!0),_(" "+b(t.field.label),1)],64))])]),fileBrowser:f(t=>[p(w,{modelValue:t.formData[t.field.prop],"onUpdate:modelValue":s=>t.formData[t.field.prop]=s,checkMode:"single"},null,8,["modelValue","onUpdate:modelValue"])]),tsSelector:f(t=>[p(P,{"model-value":t.formData[t.field.prop].split(".")[0],"value-format":"HH:mm:ss",format:"HH:mm:ss",style:{width:"120px"},"onUpdate:modelValue":s=>{t.formData[t.field.prop]=`${s||"00:00:00"}.${t.formData[t.field.prop].split(".")[1]}`,t.field.onChange(t,s,!0)}},null,8,["model-value","onUpdate:modelValue"]),W,p(S,{"model-value":Number("0."+t.formData[t.field.prop].split(".")[1]),min:0,max:1,precision:3,step:.1,style:{width:"120px"},"onUpdate:modelValue":s=>{t.formData[t.field.prop]=`${t.formData[t.field.prop].split(".")[0]}.${String(s).split(".")[1]||0}`,t.field.onChange(t,s,!0)}},null,8,["model-value","step","onUpdate:modelValue"])]),screenshots:f(t=>[p(D,{modelValue:t.formData[t.field.prop],sourcePath:t.formData.sourcePath,"onUpdate:modelValue":s=>{t.formData[t.field.prop]=s,t.field.onChange(t,s,!0)}},null,8,["modelValue","sourcePath","onUpdate:modelValue"])]),previewVideo:f(()=>[g("div",Y,[g("div",K,[p(y,{type:"primary",onLoadingClick:()=>d.previewVideo()},{default:f(()=>[_(" 预览切片 ")]),_:1},8,["onLoadingClick"]),o.previewVideoSize?(n(),m("div",Q,b(o.previewVideoSize)+"MB ",1)):c("",!0),o.needUpdatePreviewVideoSrc?(n(),m("div",X," 需要更新预览 ")):c("",!0)]),o.previewVideoSrc?(n(),m("video",{key:0,class:"video",controls:"",preload:"none",src:o.previewVideoSrc},null,8,$)):c("",!0)])]),_:1},8,["modelValue","fields","buttons","form-config"])])}const le=U(H,[["render",ee],["__scopeId","data-v-51e57fc4"]]);export{le as default};