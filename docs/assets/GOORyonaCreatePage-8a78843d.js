import{P as E}from"./PageHeader-e68f90b1.js";import{_ as M,L as U,a3 as T,A as x,a4 as P,a1 as F,M as I,a5 as O,a6 as B,a7 as L,a8 as N}from"./index-f7a815bb.js";import{cg as d,aR as l,bw as b,c0 as A,bx as n,aT as _,bD as p,bA as f,bB as V,bC as S,aS as h,a_ as C,b_ as R,cY as q,cZ as z}from"./vendor-cce75f21.js";import{f as k}from"./float-54846448.js";import"./element-plus-40a28a03.js";import"./highlightjs-4914df6f.js";const H={components:{LoadingIcon:U},props:{modelValue:{type:[String,Array],default:void 0},checkMode:{type:String,default:()=>""}},emits:["update:modelValue"],data(){return{loading:!1,useFileFilter:!0,tableData:[],currentPath:"/"}},computed:{filterTableData(){return this.tableData.filter(e=>this.fileFilter&&this.useFileFilter&&e.type==="file"?this.fileFilter(e):!0)}},watch:{modelValue:{immediate:!0,handler(e){if(e){const t=e.slice(0,e.lastIndexOf("/"))||"/";this.currentPath!==t&&this.load(t)}}}},created(){this.load(this.currentPath)},methods:{onCellClick(e,t,r,i){t.property==="name"&&(e.type==="dir"?this.load(e.path):e.type==="file"&&this.$emit("update:modelValue",e.path))},onSelectionChange(){},load(e){this.loading=!0,this.loader(e).then(t=>{this.tableData=[...t].sort((r,i)=>{const o=r.type.localeCompare(i.type);return o!==0?o:r.name.localeCompare(i.name)}),e!=="/"&&this.tableData.unshift({type:"dir",name:"..",path:e.slice(0,e.slice(0,e.length-1).lastIndexOf("/"))||"/"}),this.currentPath=e}).finally(()=>{this.loading=!1})},loader(){throw new Error("loader需实现")}}};function j(e,t,r,i,o,s){const m=d("LoadingIcon"),g=d("el-table-column"),v=d("el-radio"),y=d("el-radio-group"),D=d("el-switch"),w=d("el-table");return l(),b(w,{border:"",data:s.filterTableData,style:{width:"100%"},onCellClick:s.onCellClick,onSelectionChange:s.onSelectionChange},A({default:n(()=>[r.checkMode==="multiple"?(l(),b(g,{key:0,type:"selection",selectable:u=>u.type==="file"},null,8,["selectable"])):f("",!0),r.checkMode==="single"?(l(),b(g,{key:1,width:"40px"},{default:n(u=>[u.row.path===r.modelValue?(l(),b(y,{key:0,"model-value":u.row.path},{default:n(()=>[p(v,{value:u.row.path},null,8,["value"])]),_:2},1032,["model-value"])):f("",!0)]),_:1})):f("",!0),p(g,{"class-name":"filename-cell","show-overflow-tooltip":"",prop:"name",label:"文件名"},{header:n(()=>[V(" 文件名 "),p(D,{modelValue:o.useFileFilter,"onUpdate:modelValue":t[0]||(t[0]=u=>o.useFileFilter=u),"active-text":"打开文件过滤"},null,8,["modelValue"])]),default:n(u=>[_("span",null,S(u.row.type==="dir"?"📁":"📄")+S(u.row.name),1)]),_:1})]),_:2},[o.loading?{name:"empty",fn:n(()=>[_("div",null,[p(m)])]),key:"0"}:void 0]),1032,["data","onCellClick","onSelectionChange"])}const G=M(H,[["render",j]]);const J={extends:G,methods:{loader(e){return T(e).then(t=>t.children)},fileFilter(e){return["mkv","mp4","mov"].includes(e.extname)}}},W=M(J,[["__scopeId","data-v-fbd94c47"]]);const Y={components:{PageHeader:E,AsyncButtom:x,MediaBrowser:W},data(){return{screenshotsStore:{},previewVideoSrc:"",previewVideoSize:0,needUpdatePreviewVideoSrc:!1,canAutoUpdateEnd:!0,formConfig:{labelPosition:"top"},bangumiOptions:[],editTargetOptions:[],editingProps:[],timeControllers:[{label:"-1m",value:-60},{label:"-10s",value:-10},{label:"-1s",value:-1},{label:"+1s",value:1},{label:"+10s",value:10},{label:"+1m",value:60}],formData:{},fields:[{type:"switch",label:"编辑模式",prop:"useEditMode",defaultValue:()=>!1,required:!0,dontCheckEdit:!0},{type:"select",label:"编辑目标",prop:"id",showInForm:e=>!!e.formData.useEditMode,required:!0,dontCheckEdit:!0,options:()=>this.editTargetOptions,onCreated:()=>{P().then(e=>{this.editTargetOptions=e.map(t=>({label:t.filepath.slice(1),value:t.id}))})},formProps:{remote:!0,filterable:!0,remoteMethod:e=>{P({keyword:e}).then(t=>{this.editTargetOptions=t.map(r=>({label:r.filepath.slice(1),value:r.id}))})}}},{type:"select",prop:"bid",label:"Bangumi Id",formProps:{remote:!0,filterable:!0,remoteMethod:e=>{e&&F(e).then(t=>{this.bangumiOptions=t.map(r=>({label:r.name||r.nname,subLabel:r.nname,value:r.subject}))})}},options:()=>this.bangumiOptions,required:e=>!e.formData.useEditMode||this.editingProps.includes("bid"),disabled:e=>e.formData.useEditMode&&!this.editingProps.includes("bid")},{type:"number",prop:"ep",label:"集数",formProps:{min:0},required:e=>!e.formData.useEditMode||this.editingProps.includes("ep"),disabled:e=>e.formData.useEditMode&&!this.editingProps.includes("ep")},{type:"slot",prop:"sourcePath",slotName:"fileBrowser",label:"文件",required:!0,onChange:(e,t,r)=>{this.needUpdatePreviewVideoSrc=!0},showInForm:e=>!e.formData.useEditMode},{type:"slot",slotName:"tsSelector",needAutoUpdateTime:!0,prop:"start",label:"开始时间",afterSlotName:"screenshots",buttons:[{type:"primary",label:"获取截图",handler:e=>this.getScreenshots(e.formData.sourcePath,e.field.prop)}],required:!0,defaultValue:()=>"00:00:00.0",onChange:(e,t,r)=>{r&&this.updateEndTime()},showInForm:e=>!e.formData.useEditMode},{type:"slot",slotName:"tsSelector",prop:"end",label:"结束时间",afterSlotName:"screenshots",buttons:[{type:"primary",label:"获取截图",handler:e=>this.getScreenshots(e.formData.sourcePath,e.field.prop)}],required:!0,defaultValue:()=>"00:00:00.0",onChange:(e,t,r)=>{this.needUpdatePreviewVideoSrc=!0,r&&(this.canAutoUpdateEnd=!1)},rules:e=>[{validator:(t,r,i)=>{const o=this.timeStringToSeconds(r),s=this.timeStringToSeconds(e.formData.start);o<s?i(`结束时间[${o}]不能小于开始时间[${s}]`):i()},trigger:"blur"}],showInForm:e=>!e.formData.useEditMode},{type:"slot",slotName:"previewVideo",hiddenLabel:!0,showInForm:e=>!!e.formData.sourcePath&&!!e.formData.start&&!!e.formData.end},{type:"select",prop:"tag",valueSplitChar:",",formProps:{multiple:!0,filterable:!0,allowCreate:!0},createOptionValidator:(e,t)=>{var r;return(r=t==null?void 0:t.startsWith)!=null&&r.call(t,"#")?!0:(this.$message({type:"warning",message:"tag必须为#开头",duration:5e3}),!1)},optionsBaseCode:"VIDEO_TAG",label:"标签",required:e=>e.formData.useEditMode&&this.editingProps.includes("tag"),disabled:e=>e.formData.useEditMode&&!this.editingProps.includes("tag")},{type:"slot",slotName:"tsSelector",prop:"thumbnail",afterSlotName:"screenshots",formProps:{multiple:!0},label:"封面",rules:e=>[{validator:(t,r,i)=>{const o=this.timeStringToSeconds(r),s=this.timeStringToSeconds(e.formData.start),m=this.timeStringToSeconds(e.formData.end);o===0?i():o<s?i(`封面时间[${o}]不能小于开始时间[${s}]`):o>m?i(`封面时间[${o}]不能大于结束时间[${m}]`):i()},trigger:"submit"}],buttons:[{type:"primary",label:"获取截图",handler:e=>this.getScreenshots(e.formData.sourcePath,e.field.prop)}],defaultValue:()=>"00:00:00.0",showInForm:e=>!e.formData.useEditMode},{type:"number",prop:"previews",formProps:{multiple:!0},label:"预览图",showInForm:e=>!e.formData.useEditMode},{type:"switch",prop:"publish",label:"立即发布",defaultValue:()=>!1,showInForm:e=>!e.formData.useEditMode}],buttons:[{type:"primary",label:"提交",handler:(e,t)=>e.formInstance.submitForm().then(r=>(r.useEditMode?this.editMaterial(e,r):this.createMaterial(e,r)).then(()=>{I.success("提交成功"),e.formInstance.resetFormData(),this.editingProps=[],this.screenshotsStore={},this.previewVideoSrc="",this.previewVideoSize=0,this.needUpdatePreviewVideoSrc=!1,this.canAutoUpdateEnd=!0}))},{label:"恢复上次数据",handler:(e,t)=>{const r=localStorage.getItem("ryona-last");r&&e.formInstance.resetFormData(JSON.parse(r))}}]}},methods:{updateEndTime(){this.needUpdatePreviewVideoSrc=!0,this.canAutoUpdateEnd&&(this.formData.end=this.formData.start),this.formData.thumbnail=this.formData.start},timeStringToSeconds(e){const[t,r="0"]=e.split("."),[i,o,s]=t.split(":").map(Number),m=r.padEnd(3,"0");return i*3600+o*60+s+Number(m)/1e3},secondsToTimeString(e){e=Math.max(0,e);const t=Math.floor(k.subtract(e,parseInt(e))*1e3),r=Math.floor(e),i=Math.floor(r/3600),o=Math.floor(r%3600/60),s=r%60,m=String(i).padStart(2,"0"),g=String(o).padStart(2,"0"),v=String(s).padStart(2,"0"),y=t>0?"."+String(t).padStart(3,"0"):"";return`${m}:${g}:${v}${y}`},setTimestring(e,t){this.formData[e]=`${this.secondsToTimeString(this.timeStringToSeconds(this.formData[e].split(".")[0])+t)}.${this.formData[e].split(".")[1]}`},getScreenshots(e,t){return O(e,this.formData[t]).then(r=>{this.screenshotsStore[t]&&URL.revokeObjectURL(this.screenshotsStore[t]),this.screenshotsStore[t]=URL.createObjectURL(r)})},previewVideo(){return this.needUpdatePreviewVideoSrc=!1,B({sourcePath:this.formData.sourcePath,start:this.formData.start,end:this.formData.end}).then(e=>{this.previewVideoSrc&&URL.revokeObjectURL(this.previewVideoSrc),this.previewVideoSrc=URL.createObjectURL(e),this.previewVideoSize=(e.size/(1024*1024)).toFixed(2)})},createMaterial(e,t){localStorage.setItem("ryona-last",JSON.stringify(t));const r=this.timeStringToSeconds(t.start);let i=this.timeStringToSeconds(t.thumbnail);i&&(i=Math.max(k.subtract(i,r),0));const o={...t,thumbnail:i};return o.tag||delete o.tag,delete o.useEditMode,L(o)},editMaterial(e,t){const r={};for(const i of this.editingProps)r[i]=t[i];return N(t.id,r)}}},Z=e=>(q("data-v-f99b7e24"),e=e(),z(),e),$={class:"page"},K={class:"label-style"},Q={key:0,class:"remarks"},X={key:0,class:"remarks"},ee=Z(()=>_("span",null,".",-1)),te={class:"screenshots-box"},re={class:"btn-box"},oe=["src","onClick"],ae={class:"screenshots-video-box"},ie={class:"controls"},se={key:0,class:"size"},le={key:1,class:"tips"},ne=["src"];function de(e,t,r,i,o,s){const m=d("PageHeader"),g=d("el-checkbox"),v=d("MediaBrowser"),y=d("el-time-picker"),D=d("el-input-number"),w=d("AsyncButtom"),u=d("EasyForm");return l(),h("div",$,[p(m),p(u,{modelValue:o.formData,"onUpdate:modelValue":t[0]||(t[0]=a=>o.formData=a),fields:o.fields,buttons:o.buttons,"form-config":o.formConfig},{label:n(a=>[_("div",K,[a.formData.useEditMode&&!a.getPropValue(a.field.dontCheckEdit)?(l(),b(g,{key:0,"model-value":o.editingProps.includes(a.field.prop),"onUpdate:modelValue":c=>{c?o.editingProps.push(a.field.prop):o.editingProps.splice(o.editingProps.indexOf(a.field.prop),1)}},{default:n(()=>[a.getPropValue(a.field.required)?(l(),h("span",Q," * ")):f("",!0),V(" "+S(a.field.label),1)]),_:2},1032,["model-value","onUpdate:modelValue"])):(l(),h(C,{key:1},[a.getPropValue(a.field.required)?(l(),h("span",X," * ")):f("",!0),V(" "+S(a.field.label),1)],64))])]),fileBrowser:n(a=>[p(v,{modelValue:a.formData[a.field.prop],"onUpdate:modelValue":c=>a.formData[a.field.prop]=c,checkMode:"single"},null,8,["modelValue","onUpdate:modelValue"])]),tsSelector:n(a=>[p(y,{"model-value":a.formData[a.field.prop].split(".")[0],"value-format":"HH:mm:ss",format:"HH:mm:ss",style:{width:"120px"},"onUpdate:modelValue":c=>{a.formData[a.field.prop]=`${c||"00:00:00"}.${a.formData[a.field.prop].split(".")[1]}`}},null,8,["model-value","onUpdate:modelValue"]),ee,p(D,{"model-value":Number("0."+a.formData[a.field.prop].split(".")[1]),min:0,max:1,precision:3,step:.1,style:{width:"120px"},"onUpdate:modelValue":c=>{a.formData[a.field.prop]=`${a.formData[a.field.prop].split(".")[0]}.${String(c).split(".")[1]||0}`}},null,8,["model-value","step","onUpdate:modelValue"])]),screenshots:n(a=>[_("div",te,[_("div",re,[(l(!0),h(C,null,R(o.timeControllers,c=>(l(),b(w,{key:c.label,size:"mini",onLoadingClick:()=>{s.setTimestring(a.field.prop,c.value),a.field.needAutoUpdateTime&&s.updateEndTime()}},{default:n(()=>[V(S(c.label),1)]),_:2},1032,["onLoadingClick"]))),128))]),o.screenshotsStore[a.field.prop]?(l(),h("img",{key:0,class:"image",src:o.screenshotsStore[a.field.prop],onClick:c=>e.$imagePreview(o.screenshotsStore[a.field.prop])},null,8,oe)):f("",!0)])]),previewVideo:n(()=>[_("div",ae,[_("div",ie,[p(w,{type:"primary",onLoadingClick:()=>s.previewVideo()},{default:n(()=>[V(" 预览切片 ")]),_:1},8,["onLoadingClick"]),o.previewVideoSize?(l(),h("div",se,S(o.previewVideoSize)+"MB ",1)):f("",!0),o.needUpdatePreviewVideoSrc?(l(),h("div",le," 需要更新预览 ")):f("",!0)]),o.previewVideoSrc?(l(),h("video",{key:0,class:"video",controls:"",preload:"none",src:o.previewVideoSrc},null,8,ne)):f("",!0)])]),_:1},8,["modelValue","fields","buttons","form-config"])])}const ge=M(Y,[["render",de],["__scopeId","data-v-f99b7e24"]]);export{ge as default};