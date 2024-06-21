import{q as e,r as a,G as t,O as s,a as l,C as o,f as i,p as d,u as m,v as u}from"./element-plus.js";import{s as r,u as n,a as c}from"./site2.js";import{f as p,u as f}from"./sys_app.js";import{_ as g}from"./@qiun.js";import{r as y,o as h,c as b,g as V,Z as _,$ as j}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./copy-to-clipboard.js";import"./toggle-selection.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./index.js";import"./pinia.js";import"./vue-demi.js";import"./pinia-plugin-persist.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const w={class:"mr-10 ml-10"};const v={class:"mr-10 ml-10"};const x={class:"mr-10 ml-10"};const k={class:"pd-20 content-wrap"};const q=g({name:"sys-index",components:{ConfigSet:g({name:"ConfigSet",data:()=>({loading:!0,set:{template:"default",maxAge:"1",dataCache:"1",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await p();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await f(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(u,r,n,c,p,f){const g=e,v=a,x=t,k=s,q=y("QuestionFilled"),C=l,U=o,$=i,K=d,S=m;return h(),b("div",w,[V(S,{label:"应用配置",class:"mt-20",name:"config"},{default:_((()=>[V(K,{ref:"set",model:u.set,"label-width":"120px"},{default:_((()=>[V(v,{prop:"template",label:"模板"},{default:_((()=>[V(g,{modelValue:u.set.template,"onUpdate:modelValue":r[0]||(r[0]=e=>u.set.template=e),placeholder:"默认模板default不用填写"},null,8,["modelValue"])])),_:1}),V(v,{label:"上传方式"},{default:_((()=>[V(k,{modelValue:u.set.uploadWay,"onUpdate:modelValue":r[1]||(r[1]=e=>u.set.uploadWay=e),class:"ml-4"},{default:_((()=>[V(x,{value:"1"},{default:_((()=>[j("普通")])),_:1}),V(x,{value:"2"},{default:_((()=>[j("七牛云")])),_:1})])),_:1},8,["modelValue"])])),_:1}),V(v,{label:"文件缓存"},{default:_((()=>[V(k,{modelValue:u.set.maxAge,"onUpdate:modelValue":r[2]||(r[2]=e=>u.set.maxAge=e),class:"ml-4"},{default:_((()=>[V(x,{value:"1"},{default:_((()=>[j("开启")])),_:1}),V(x,{value:"2"},{default:_((()=>[j("关闭")])),_:1})])),_:1},8,["modelValue"]),V(U,{placement:"top-start",title:"静态资源缓存",width:200,trigger:"hover",content:"css,js,img等模板静态资源缓存。建议：线上环境开启"},{reference:_((()=>[V(C,{class:"ml-20 pointer c-165dff"},{default:_((()=>[V(q)])),_:1})])),_:1})])),_:1}),V(v,{label:"数据缓存"},{default:_((()=>[V(k,{modelValue:u.set.dataCache,"onUpdate:modelValue":r[3]||(r[3]=e=>u.set.dataCache=e),class:"ml-4"},{default:_((()=>[V(x,{value:"1"},{default:_((()=>[j("开启")])),_:1}),V(x,{value:"2"},{default:_((()=>[j("关闭")])),_:1})])),_:1},8,["modelValue"]),V(U,{placement:"top-start",title:"全局模板数据缓存",width:200,trigger:"hover",content:"站点，分类，配置，友情链接，碎片，标签等数据。建议：线上环境开启"},{reference:_((()=>[V(C,{class:"ml-20 pointer c-165dff"},{default:_((()=>[V(q)])),_:1})])),_:1})])),_:1}),V(v,null,{default:_((()=>[V($,{type:"primary",onClick:r[4]||(r[4]=e=>f.submit("set"))},{default:_((()=>[j("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]]),QiNiu:g({name:"QiNiu",data:()=>({loading:!0,set:{template:"default",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await p();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await f(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(t,s,l,o,u,r){const n=e,c=a,p=i,f=d,g=m;return h(),b("div",v,[V(g,{label:"七牛云配置",class:"mt-20",name:"qiniu"},{default:_((()=>[V(f,{ref:"set",model:t.set,"label-width":"120px"},{default:_((()=>[V(c,{prop:"accessKey",label:"accessKey(AK)"},{default:_((()=>[V(n,{modelValue:t.set.accessKey,"onUpdate:modelValue":s[0]||(s[0]=e=>t.set.accessKey=e)},null,8,["modelValue"])])),_:1}),V(c,{prop:"secretKey",label:"secretKey(SK)"},{default:_((()=>[V(n,{modelValue:t.set.secretKey,"onUpdate:modelValue":s[1]||(s[1]=e=>t.set.secretKey=e)},null,8,["modelValue"])])),_:1}),V(c,{prop:"domain",label:"域名"},{default:_((()=>[V(n,{modelValue:t.set.domain,"onUpdate:modelValue":s[2]||(s[2]=e=>t.set.domain=e)},null,8,["modelValue"])])),_:1}),V(c,{prop:"bucket",label:"空间"},{default:_((()=>[V(n,{modelValue:t.set.bucket,"onUpdate:modelValue":s[3]||(s[3]=e=>t.set.bucket=e)},null,8,["modelValue"])])),_:1}),V(c,null,{default:_((()=>[V(p,{type:"primary",onClick:s[4]||(s[4]=e=>r.submit("set"))},{default:_((()=>[j("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]]),WeChat:g({name:"WeChat",data:()=>({loading:!0,set:{template:"default",appid:"",secret:"",accessKey:"",secretKey:"",domain:"",bucket:"",uploadWay:"1"}}),computed:{},created(){this.query()},methods:{async query(){try{let e=await p();200===e.code?(this.loading=!1,this.set=e.data):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async update(){try{let e=await f(this.set);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(t,s,l,o,u,r){const n=e,c=a,p=i,f=d,g=m;return h(),b("div",x,[V(g,{label:"微信配置",class:"mt-20",name:"wechat"},{default:_((()=>[V(f,{ref:"set",model:t.set,"label-width":"80px"},{default:_((()=>[V(c,{label:"appid",prop:"appid",rules:[{required:!0,message:"请输入appid",trigger:"blur"}]},{default:_((()=>[V(n,{modelValue:t.set.appid,"onUpdate:modelValue":s[0]||(s[0]=e=>t.set.appid=e)},null,8,["modelValue"])])),_:1}),V(c,{prop:"secret",label:"secret"},{default:_((()=>[V(n,{modelValue:t.set.secret,"onUpdate:modelValue":s[1]||(s[1]=e=>t.set.secret=e)},null,8,["modelValue"])])),_:1}),V(c,null,{default:_((()=>[V(p,{type:"primary",onClick:s[2]||(s[2]=e=>r.submit("set"))},{default:_((()=>[j("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]])},data:()=>({loading:!0,activeName:"first",activeIndex:"0",info:{id:"",name:"",domain:"",email:"",icp:"",json:"",code:""},seo:{id:"",title:"",keywords:"",description:""},infoRules:{name:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},seoRules:{title:[{required:!0,message:"不能为空",trigger:"blur"},{min:2,max:50,message:"长度在 2 到 50 个字符",trigger:"blur"}]}}),computed:{},created(){this.query()},methods:{handleClick(e){this.activeIndex=e.index},async query(){try{let e=await r();if(200===e.code){this.loading=!1;let{id:a,name:t,domain:s,email:l,icp:o,police:i,copyright:d,json:m,code:u,title:r,keywords:n,description:c}=e.data;this.info={id:a,name:t,domain:s,email:l,icp:o,police:i,copyright:d,code:u,json:m},this.seo={id:a,title:r,keywords:n,description:c}}else this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async updateInfo(){try{let e=await n(this.info);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},async updateSeo(){try{let e=await c(this.seo);200===e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.query()):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submitInfo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateInfo()}))},submitSeo(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.updateSeo()}))}}},[["render",function(t,s,l,o,r,n){const c=e,p=a,f=i,g=d,w=m,v=y("ConfigSet"),x=y("QiNiu"),q=y("WeChat"),C=u;return h(),b("div",k,[V(C,{modelValue:t.activeName,"onUpdate:modelValue":s[11]||(s[11]=e=>t.activeName=e),onTabClick:n.handleClick},{default:_((()=>[V(w,{label:"基本设置",class:"mt-20",name:"first"},{default:_((()=>[V(g,{ref:"info",model:t.info,"label-width":"84px"},{default:_((()=>[V(p,{label:"网站名称",prop:"name",rules:[{required:!0,message:"请输入网站名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:_((()=>[V(c,{modelValue:t.info.name,"onUpdate:modelValue":s[0]||(s[0]=e=>t.info.name=e)},null,8,["modelValue"])])),_:1}),V(p,{prop:"domain",label:"网站域名"},{default:_((()=>[V(c,{modelValue:t.info.domain,"onUpdate:modelValue":s[1]||(s[1]=e=>t.info.domain=e)},null,8,["modelValue"])])),_:1}),V(p,{prop:"email",label:"站长邮箱"},{default:_((()=>[V(c,{modelValue:t.info.email,"onUpdate:modelValue":s[2]||(s[2]=e=>t.info.email=e),rules:[{type:"email",message:"请输入正确的邮箱",trigger:["blur","change"]}]},null,8,["modelValue"])])),_:1}),V(p,{prop:"icp",label:"ICP备案号"},{default:_((()=>[V(c,{modelValue:t.info.icp,"onUpdate:modelValue":s[3]||(s[3]=e=>t.info.icp=e)},null,8,["modelValue"])])),_:1}),V(p,{prop:"code",label:"统计代码"},{default:_((()=>[V(c,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:t.info.code,"onUpdate:modelValue":s[4]||(s[4]=e=>t.info.code=e)},null,8,["modelValue"])])),_:1}),V(p,{prop:"json",label:"其他配置"},{default:_((()=>[V(c,{type:"textarea",prop:"textarea",class:"textarea",rows:3,modelValue:t.info.json,"onUpdate:modelValue":s[5]||(s[5]=e=>t.info.json=e)},null,8,["modelValue"])])),_:1}),V(p,null,{default:_((()=>[V(f,{type:"primary",onClick:s[6]||(s[6]=e=>n.submitInfo("info"))},{default:_((()=>[j("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),V(w,{label:"SEO设置",class:"mt-20",name:"second"},{default:_((()=>[V(g,{ref:"seo",model:t.seo,"label-width":"84px"},{default:_((()=>[V(p,{label:"标题",prop:"title",rules:[{required:!0,message:"请输入网站标题",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},{default:_((()=>[V(c,{modelValue:t.seo.title,"onUpdate:modelValue":s[7]||(s[7]=e=>t.seo.title=e)},null,8,["modelValue"])])),_:1}),V(p,{label:"关键词",prop:"keywords"},{default:_((()=>[V(c,{modelValue:t.seo.keywords,"onUpdate:modelValue":s[8]||(s[8]=e=>t.seo.keywords=e)},null,8,["modelValue"])])),_:1}),V(p,{label:"描述",prop:"description",rules:[{min:2,max:255,message:"字数限制255",trigger:"blur"}]},{default:_((()=>[V(c,{type:"textarea",rows:3,class:"textarea",modelValue:t.seo.description,"onUpdate:modelValue":s[9]||(s[9]=e=>t.seo.description=e)},null,8,["modelValue"])])),_:1}),V(p,null,{default:_((()=>[V(f,{type:"primary",onClick:s[10]||(s[10]=e=>n.submitSeo("seo"))},{default:_((()=>[j("保存")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),V(v),V(x),V(q)])),_:1},8,["modelValue","onTabClick"])])}]]);export{q as default};
