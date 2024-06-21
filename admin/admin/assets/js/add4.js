import{q as e,r as l,M as a,N as s,f as m,p as t}from"./element-plus.js";import{c as o}from"./field.js";import{_ as r}from"./@qiun.js";import{o as d,c as i,g as u,Z as p,X as n,aa as f,e as c,$ as _}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./copy-to-clipboard.js";import"./toggle-selection.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./vue-demi.js";import"./pinia-plugin-persist.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const b={class:"mr-10 ml-10 mb-20 bg-fff pd-20"};const j=r({name:"field-add",components:{},data:()=>({params:{model_id:"",field_cname:"",field_ename:"",field_type:"",field_values:"",field_default:"",field_length:"",field_sort:"0"},type:[{value:"1",label:"单行文本"},{value:"2",label:"多行文本 "},{value:"3",label:"下拉菜单"},{value:"4",label:"单选"},{value:"5",label:"多选 "},{value:"6",label:"时间和日期 "},{value:"7",label:"数字 "},{value:"8",label:"多图上传 "},{value:"9",label:"富文本 "}],value:"",paramsRules:{field_cname:[{required:!0,message:"字段名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){const{model_name:e,mid:l,table_name:a}=this.$route.query;this.params.model_id=l,this.params.table_name=a,this.model_name=e},methods:{handleAttr(e){console.log("e--\x3e",e)},async create(){try{let e=await o(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(o,r,j,g,v,h){const V=e,y=l,x=a,U=s,$=m,q=t;return d(),i("div",b,[u(q,{ref:"params",model:o.params,rules:o.paramsRules,"label-width":"100px",class:"mt-20"},{default:p((()=>[u(y,{label:"字段备注",prop:"field_cname"},{default:p((()=>[u(V,{modelValue:o.params.field_cname,"onUpdate:modelValue":r[0]||(r[0]=e=>o.params.field_cname=e)},null,8,["modelValue"])])),_:1}),u(y,{label:"字段名称",prop:"field_ename"},{default:p((()=>[u(V,{modelValue:o.params.field_ename,"onUpdate:modelValue":r[1]||(r[1]=e=>o.params.field_ename=e)},null,8,["modelValue"])])),_:1}),u(y,{label:"字段类型"},{default:p((()=>[u(U,{modelValue:o.params.field_type,"onUpdate:modelValue":r[2]||(r[2]=e=>o.params.field_type=e),placeholder:"请选择"},{default:p((()=>[(d(!0),i(n,null,f(o.type,(e=>(d(),c(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),u(y,{label:"字段选项"},{default:p((()=>[u(V,{modelValue:o.params.field_values,"onUpdate:modelValue":r[3]||(r[3]=e=>o.params.field_values=e),rows:2,type:"textarea",placeholder:"单选多选下拉框，请填写json格式。例如：[{label:'男',value:'1'},{label:'女',value:'2'}]  "},null,8,["modelValue"])])),_:1}),u(y,{label:"默认值"},{default:p((()=>[u(V,{modelValue:o.params.field_default,"onUpdate:modelValue":r[4]||(r[4]=e=>o.params.field_default=e)},null,8,["modelValue"])])),_:1}),u(y,{label:"排序"},{default:p((()=>[u(V,{modelValue:o.params.field_sort,"onUpdate:modelValue":r[5]||(r[5]=e=>o.params.field_sort=e)},null,8,["modelValue"])])),_:1}),u(y,{label:"字段长度"},{default:p((()=>[u(V,{modelValue:o.params.field_length,"onUpdate:modelValue":r[6]||(r[6]=e=>o.params.field_length=e)},null,8,["modelValue"])])),_:1}),u(y,null,{default:p((()=>[u($,{type:"primary",onClick:r[7]||(r[7]=e=>h.submit("params"))},{default:p((()=>[_("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{j as default};
