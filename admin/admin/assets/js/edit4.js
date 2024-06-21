import{q as e,r as a,M as l,N as s,f as t,p as o}from"./element-plus.js";import{d as m,u as d}from"./field.js";import{h as i}from"./model.js";import{_ as r}from"./@qiun.js";import{o as u,c as p,g as n,Z as f,X as c,aa as _,e as b,$ as h}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./copy-to-clipboard.js";import"./toggle-selection.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./vue-demi.js";import"./pinia-plugin-persist.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const g={class:"mr-10 ml-10 mb-20 pd-20 c-fff"};const j=r({name:"field-edit",data:()=>({params:{id:"",model_id:"",table_name:"",field_cname:"",field_ename:"",field_type:"",field_values:"",field_default:"",field_length:"",field_sort:"0"},type:[{value:"1",label:"单行文本"},{value:"2",label:"多行文本 "},{value:"3",label:"下拉菜单"},{value:"4",label:"单选"},{value:"5",label:"多选 "},{value:"6",label:"时间和日期 "},{value:"7",label:"数字 "},{value:"8",label:"多图上传 "},{value:"9",label:"富文本 "}],disable:!0,value:"",paramsRules:{field_cname:[{required:!0,message:"字段名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},async created(){const{model_name:e,fid:a,mid:l,table_name:s}=this.$route.query;this.params.id=a,this.params.model_id=l,this.params.table_name=s,this.model_name=e,await this.detail()},methods:{async hasUse(e){try{(await i(e)).data.has.length>0?this.disable=!0:this.disable=!1}catch(a){console.log(a)}},async detail(){try{let e=await m(this.params.id);if(200===e.code){let a=e.data;this.params=a,this.hasUse(a.model_id)}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},handletag(e){console.log("e--\x3e",e)},handleBox(e){console.log("e--\x3e",e)},async update(){try{let e=await d(this.params);200==e.code?this.$message({message:"更新成功^_^",type:"success"}):this.$message({message:e.msg,type:"success"}),this.$router.go(-1)}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(m,d,i,r,j,v){const y=e,V=a,x=l,U=s,w=t,$=o;return u(),p("div",g,[n($,{ref:"params",model:m.params,rules:m.paramsRules,"label-width":"100px",class:"mt-20"},{default:f((()=>[n(V,{label:"字段备注",prop:"field_cname"},{default:f((()=>[n(y,{modelValue:m.params.field_cname,"onUpdate:modelValue":d[0]||(d[0]=e=>m.params.field_cname=e)},null,8,["modelValue"])])),_:1}),n(V,{label:"字段名称",prop:"field_ename"},{default:f((()=>[n(y,{modelValue:m.params.field_ename,"onUpdate:modelValue":d[1]||(d[1]=e=>m.params.field_ename=e),disabled:m.disable},null,8,["modelValue","disabled"])])),_:1}),n(V,{label:"字段类型"},{default:f((()=>[n(U,{modelValue:m.params.field_type,"onUpdate:modelValue":d[2]||(d[2]=e=>m.params.field_type=e),disabled:m.disable,placeholder:"请选择"},{default:f((()=>[(u(!0),p(c,null,_(m.type,(e=>(u(),b(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),n(V,{label:"字段选项"},{default:f((()=>[n(y,{modelValue:m.params.field_values,"onUpdate:modelValue":d[3]||(d[3]=e=>m.params.field_values=e),rows:2,type:"textarea",placeholder:"单选、多选、下拉框，请填写json格式。例如：[{label:'男',value:'1'},{label:'女',value:'2'}]  "},null,8,["modelValue"])])),_:1}),n(V,{label:"默认值"},{default:f((()=>[n(y,{modelValue:m.params.field_default,"onUpdate:modelValue":d[4]||(d[4]=e=>m.params.field_default=e)},null,8,["modelValue"])])),_:1}),n(V,{label:"排序"},{default:f((()=>[n(y,{modelValue:m.params.field_sort,"onUpdate:modelValue":d[5]||(d[5]=e=>m.params.field_sort=e)},null,8,["modelValue"])])),_:1}),n(V,{label:"字段长度"},{default:f((()=>[n(y,{modelValue:m.params.field_length,"onUpdate:modelValue":d[6]||(d[6]=e=>m.params.field_length=e)},null,8,["modelValue"])])),_:1}),n(V,null,{default:f((()=>[n(w,{type:"primary",onClick:d[7]||(d[7]=e=>v.submit("params"))},{default:f((()=>[h("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{j as default};
