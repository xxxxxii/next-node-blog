System.register(["./element-plus-legacy.js","./frag-legacy.js","./tinymce-legacy.js","./pinyin-pro-legacy.js","./upload-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./copy-to-clipboard-legacy.js","./toggle-selection-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./vue-demi-legacy.js","./pinia-plugin-persist-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js","./sys_app-legacy.js"],(function(e,l){"use strict";var a,s,t,n,u,r,c,o,m,p,d,i,g,y,j,f,h,_,b,V,v,x,k;return{setters:[e=>{a=e.q,s=e.r,t=e.G,n=e.O,u=e.f,r=e.p,c=e.H},e=>{o=e.c},e=>{m=e._,p=e.t},e=>{d=e.p},e=>{i=e.u},e=>{g=e._},e=>{y=e.r,j=e.o,f=e.c,h=e.w,_=e.e,b=e.Z,V=e.a,v=e.g,x=e.$,k=e.f},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent="[data-v-6178e948] .tiny-textarea{height:436px}\n",document.head.appendChild(l);const w={class:"mr-10 ml-10 mb-20 pd-10 bg-fff"};e("default",g({name:"frag-add",components:{Vue3Tinymce:m},data:()=>({setting:p,loading:!0,params:{type:"1",name:"",mark:"",content:"欢迎使用ChanCMS系统"},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){this.setting.images_upload_url=await i()},created(){},unmounted(){},watch:{"params.name":function(e,l){this.params.mark=d(e,{toneType:"none"}).replace(/\s+/g,"")}},methods:{tinymce(){this.loading=!1},setContent(e){this.params.content=e},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{let e=await o(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(e,l,o,m,p,d){const i=a,g=s,C=t,U=n,$=y("vue3-tinymce"),q=u,z=r,I=c;return j(),f("div",w,[h((j(),_(z,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:"mt-20"},{default:b((()=>[V("div",null,[v(g,{label:"碎片名称",prop:"name"},{default:b((()=>[v(i,{modelValue:e.params.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.params.name=l),placeholder:"请输入汉字"},null,8,["modelValue"])])),_:1}),v(g,{label:"碎片标识",prop:"mark"},{default:b((()=>[v(i,{modelValue:e.params.mark,"onUpdate:modelValue":l[1]||(l[1]=l=>e.params.mark=l),placeholder:"模板使用标识"},null,8,["modelValue"])])),_:1}),v(g,{label:"碎片类型",prop:"type"},{default:b((()=>[v(U,{modelValue:e.params.type,"onUpdate:modelValue":l[2]||(l[2]=l=>e.params.type=l),class:"ml-4"},{default:b((()=>[v(C,{value:"1"},{default:b((()=>[x("富文本")])),_:1}),v(C,{value:"2"},{default:b((()=>[x("文本框")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"1"==e.params.type?(j(),_(g,{key:0,label:"碎片内容"},{default:b((()=>[v($,{modelValue:e.params.content,"onUpdate:modelValue":l[3]||(l[3]=l=>e.params.content=l),setting:e.setting,onInit:d.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1})):k("",!0),"2"==e.params.type?(j(),_(g,{key:1,label:"碎片内容"},{default:b((()=>[v(i,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:e.params.content,"onUpdate:modelValue":l[4]||(l[4]=l=>e.params.content=l)},null,8,["modelValue"])])),_:1})):k("",!0)]),v(g,null,{default:b((()=>[v(q,{type:"primary",onClick:l[5]||(l[5]=e=>d.submit("params"))},{default:b((()=>[x("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[I,e.loading]])])}],["__scopeId","data-v-6178e948"]]))}}}));
