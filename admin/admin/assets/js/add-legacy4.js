System.register(["./element-plus-legacy.js","./field-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./copy-to-clipboard-legacy.js","./toggle-selection-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./vue-demi-legacy.js","./pinia-plugin-persist-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,u,d,t,m,n,r,o,i,c,p,g,f,y,_;return{setters:[e=>{a=e.q,s=e.r,u=e.M,d=e.N,t=e.f,m=e.p},e=>{n=e.c},e=>{r=e._},e=>{o=e.o,i=e.c,c=e.g,p=e.Z,g=e.X,f=e.aa,y=e.e,_=e.$},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10 mb-20 bg-fff pd-20"};e("default",r({name:"field-add",components:{},data:()=>({params:{model_id:"",field_cname:"",field_ename:"",field_type:"",field_values:"",field_default:"",field_length:"",field_sort:"0"},type:[{value:"1",label:"单行文本"},{value:"2",label:"多行文本 "},{value:"3",label:"下拉菜单"},{value:"4",label:"单选"},{value:"5",label:"多选 "},{value:"6",label:"时间和日期 "},{value:"7",label:"数字 "},{value:"8",label:"多图上传 "},{value:"9",label:"富文本 "}],value:"",paramsRules:{field_cname:[{required:!0,message:"字段名称",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}],table_name:[{required:!0,message:"新增表名",trigger:"blur"},{min:2,max:80,message:"名称长度在 2 到 80 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){const{model_name:e,mid:l,table_name:a}=this.$route.query;this.params.model_id=l,this.params.table_name=a,this.model_name=e},methods:{handleAttr(e){console.log("e--\x3e",e)},async create(){try{let e=await n(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(e,n,r,b,j,v){const h=a,V=s,x=u,U=d,$=t,q=m;return o(),i("div",l,[c(q,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"100px",class:"mt-20"},{default:p((()=>[c(V,{label:"字段备注",prop:"field_cname"},{default:p((()=>[c(h,{modelValue:e.params.field_cname,"onUpdate:modelValue":n[0]||(n[0]=l=>e.params.field_cname=l)},null,8,["modelValue"])])),_:1}),c(V,{label:"字段名称",prop:"field_ename"},{default:p((()=>[c(h,{modelValue:e.params.field_ename,"onUpdate:modelValue":n[1]||(n[1]=l=>e.params.field_ename=l)},null,8,["modelValue"])])),_:1}),c(V,{label:"字段类型"},{default:p((()=>[c(U,{modelValue:e.params.field_type,"onUpdate:modelValue":n[2]||(n[2]=l=>e.params.field_type=l),placeholder:"请选择"},{default:p((()=>[(o(!0),i(g,null,f(e.type,(e=>(o(),y(x,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(V,{label:"字段选项"},{default:p((()=>[c(h,{modelValue:e.params.field_values,"onUpdate:modelValue":n[3]||(n[3]=l=>e.params.field_values=l),rows:2,type:"textarea",placeholder:"单选多选下拉框，请填写json格式。例如：[{label:'男',value:'1'},{label:'女',value:'2'}]  "},null,8,["modelValue"])])),_:1}),c(V,{label:"默认值"},{default:p((()=>[c(h,{modelValue:e.params.field_default,"onUpdate:modelValue":n[4]||(n[4]=l=>e.params.field_default=l)},null,8,["modelValue"])])),_:1}),c(V,{label:"排序"},{default:p((()=>[c(h,{modelValue:e.params.field_sort,"onUpdate:modelValue":n[5]||(n[5]=l=>e.params.field_sort=l)},null,8,["modelValue"])])),_:1}),c(V,{label:"字段长度"},{default:p((()=>[c(h,{modelValue:e.params.field_length,"onUpdate:modelValue":n[6]||(n[6]=l=>e.params.field_length=l)},null,8,["modelValue"])])),_:1}),c(V,null,{default:p((()=>[c($,{type:"primary",onClick:n[7]||(n[7]=e=>v.submit("params"))},{default:p((()=>[_("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
