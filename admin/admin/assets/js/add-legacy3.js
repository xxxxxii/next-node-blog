System.register(["./element-plus-legacy.js","./collect-legacy.js","./@qiun-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./copy-to-clipboard-legacy.js","./toggle-selection-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./index-legacy.js","./pinia-legacy.js","./vue-demi-legacy.js","./pinia-plugin-persist-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,a){"use strict";var l,s,t,r,u,c,m,d,i,o,p,g,n,h,y,f,b,_,V,j,v,U,T,k,w;return{setters:[e=>{l=e.q,s=e.r,t=e.G,r=e.O,u=e.f,c=e.u,m=e.v,d=e.p},e=>{i=e.g,o=e.a,p=e.c},e=>{g=e._},e=>{n=e.o,h=e.c,y=e.g,f=e.Z,b=e.a,_=e.$,V=e.e,j=e.X,v=e.aa,U=e.t,T=e.f,k=e.p,w=e.b},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent="[data-v-756d99b7] .show .el-form-item__content{flex-direction:column;align-items:start}\n",document.head.appendChild(a);const x={name:"collect-add",data:()=>({activeName:"list",params:{taskName:"",targetUrl:"",listTag:"",startNum:1,endNum:1,increment:1,pages:[],titleTag:"",articleTag:"",charset:"1",parseData:"",status:"1",cid:1},listPages:[],article:{}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async getPages(){try{let{targetUrl:e,listTag:a,charset:l}=this.params,s=await i({targetUrl:e,listTag:a,charset:l});if(200==s.code){let a=s.data;const l=/^(.*:\/\/[^\/]+).*$/,t=e.match(l)[1];a[0].includes("http")||(a=a.map((e=>t+e))),this.params.pages=a,this.$message({message:"列表地址获取成功^_^",type:"success"})}}catch(e){console.log(e)}},async getListPages(){try{let{targetUrl:e,startNum:a,endNum:l,increment:s}=this.params,t=[];for(let r=a;r<=l;r+=s){let a=e.replace("${page}",r);t.push(a)}this.listPages=t,this.listPages.map((async(e,a)=>{let{listTag:l,charset:s}=this.params;if(a>0){let a=await i({targetUrl:e,listTag:l,charset:s});200==a.code&&(this.params.pages=[...this.params.pages,...a.data])}}))}catch(e){console.log(e)}},async getArticle(){try{let{taskUrl:e,titleTag:a,articleTag:l,parseData:s,charset:t}=this.params;e=this.params.pages[0]||"";let r=await o({taskUrl:e,titleTag:a,articleTag:l,parseData:s,charset:t});200==r.code&&(this.article=r.data,this.$message({message:"内功获取成功^_^",type:"success"}))}catch(e){console.log(e)}},async create(){try{this.params.pages=this.params.pages.toString();let e=await p(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return!1;this.create()}))}}},N=e=>(k("data-v-756d99b7"),e=e(),w(),e),q={class:"mb-20 bg-fff pd-20"},C={class:"row w-p100"},$={class:"row w-p100"},P={class:"row w-p100"},z=N((()=>b("span",{class:"ml-5 mr-5"},"至",-1))),D=N((()=>b("span",{class:"ml-5 mr-5"},"每页递增",-1))),A=["href"],S={class:"row w-p100"},E=N((()=>b("p",null,"内容：",-1)));e("default",g(x,[["render",function(e,a,i,o,p,g){const k=l,w=s,x=t,N=r,L=u,O=c,B=m,G=d;return n(),h("div",q,[y(G,{ref:"params",model:e.params,"label-width":"84px"},{default:f((()=>[y(B,{modelValue:e.activeName,"onUpdate:modelValue":a[13]||(a[13]=a=>e.activeName=a),class:"demo-tabs"},{default:f((()=>[y(O,{label:"列表测试",name:"list"},{default:f((()=>[y(w,{label:"任务名称",prop:"taskName",rules:[{required:!0,message:"请输入任务名称",trigger:"blur"}]},{default:f((()=>[y(k,{modelValue:e.params.taskName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.params.taskName=a),placeholder:"例：前端库-chat问答"},null,8,["modelValue"])])),_:1}),y(w,{label:"列表网址",prop:"targetUrl",rules:[{required:!0,message:"请输入匹配网址",trigger:"blur"}]},{default:f((()=>[b("div",C,[y(k,{class:"flex-1",modelValue:e.params.targetUrl,"onUpdate:modelValue":a[1]||(a[1]=a=>e.params.targetUrl=a),placeholder:"/SEO/1_${page}.html"},null,8,["modelValue"])])])),_:1}),y(w,{label:"字符集",prop:"charset",rules:[{required:!0,message:"请选择字符集",trigger:"blur"}]},{default:f((()=>[y(N,{modelValue:e.params.charset,"onUpdate:modelValue":a[2]||(a[2]=a=>e.params.charset=a),class:"ml-4"},{default:f((()=>[y(x,{value:"1",size:"large"},{default:f((()=>[_("uft-8")])),_:1}),y(x,{value:"2",size:"large"},{default:f((()=>[_("gb2312")])),_:1})])),_:1},8,["modelValue"])])),_:1}),y(w,{label:"列表链接",prop:"listTag",rules:[{required:!0,message:"请输入文章列表标签",trigger:"blur"}]},{default:f((()=>[b("div",$,[y(k,{class:"flex-1",modelValue:e.params.listTag,"onUpdate:modelValue":a[3]||(a[3]=a=>e.params.listTag=a),placeholder:"例：.content h4 a"},null,8,["modelValue"]),y(L,{class:"ml-5",type:"primary",onClick:g.getPages},{default:f((()=>[_(" 测试 ")])),_:1},8,["onClick"])])])),_:1}),y(w,{label:"开始页面"},{default:f((()=>[b("div",P,[y(k,{class:"flex-1",modelValue:e.params.startNum,"onUpdate:modelValue":a[4]||(a[4]=a=>e.params.startNum=a)},null,8,["modelValue"]),z,y(k,{class:"flex-1",modelValue:e.params.endNum,"onUpdate:modelValue":a[5]||(a[5]=a=>e.params.endNum=a)},null,8,["modelValue"]),D,y(k,{class:"flex-1 mr-5",modelValue:e.params.increment,"onUpdate:modelValue":a[6]||(a[6]=a=>e.params.increment=a)},null,8,["modelValue"]),y(L,{type:"primary",onClick:g.getListPages},{default:f((()=>[_("测试")])),_:1},8,["onClick"])])])),_:1}),e.listPages.length>0?(n(),V(w,{key:0,label:"列表地址"},{default:f((()=>[(n(!0),h(j,null,v(e.listPages,((e,a)=>(n(),h("p",{class:"mr-30",key:a},U(e),1)))),128))])),_:1})):T("",!0),e.params.pages.length>0?(n(),V(w,{key:1,label:"文章地址"},{default:f((()=>[(n(!0),h(j,null,v(e.params.pages,((e,a)=>(n(),h("p",{class:"mr-30",key:a},U(e),1)))),128))])),_:1})):T("",!0)])),_:1}),y(O,{label:"内容测试",name:"article"},{default:f((()=>[y(w,{label:"目标地址"},{default:f((()=>[b("a",{class:"mr-10",href:e.params.pages[0],target:"_blank"},U(e.params.pages[0]),9,A),_("（默认第一个作为测试） ")])),_:1}),y(w,{label:"文章标题",prop:"titleTag",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"}]},{default:f((()=>[y(k,{class:"flex-1",placeholder:"例：.title",modelValue:e.params.titleTag,"onUpdate:modelValue":a[7]||(a[7]=a=>e.params.titleTag=a)},null,8,["modelValue"])])),_:1}),y(w,{label:"文章内容",prop:"articleTag",rules:[{required:!0,message:"请输入文章内容",trigger:"blur"}]},{default:f((()=>[y(k,{placeholder:"例：.article",modelValue:e.params.articleTag,"onUpdate:modelValue":a[8]||(a[8]=a=>e.params.articleTag=a)},null,8,["modelValue"])])),_:1}),y(w,{label:"处理函数",prop:"parseData",rules:[{required:!0,message:"如果无特殊处理，请直接填写 return data;",trigger:"blur"}]},{default:f((()=>[b("div",S,[y(k,{class:"flex-1",type:"textarea",rows:13,modelValue:e.params.parseData,"onUpdate:modelValue":a[9]||(a[9]=a=>e.params.parseData=a),placeholder:"如果不做任何处理，直接返回data。拿到的文本是变量是data,可以直接js函数可以处理成需要的数据，最终需要返回data。例：\n            data = data.replaceAll('<BR>','<br/>');\n            return data;\n            //或\n            return data;\n            "},null,8,["modelValue"]),y(L,{class:"ml-5",type:"primary",onClick:g.getArticle},{default:f((()=>[_(" 测试 ")])),_:1},8,["onClick"])])])),_:1}),y(w,{class:"show",label:"文章结果"},{default:f((()=>[b("p",null,"标题："+U(e.article.title),1),E,b("div",null,U(e.article.article),1)])),_:1})])),_:1}),y(O,{label:"保存配置",name:"save"},{default:f((()=>[y(w,{label:"保存栏目",prop:"articleTag",rules:[{required:!0,message:"请输入保存栏目",trigger:"blur"}]},{default:f((()=>[y(k,{modelValue:e.params.cid,"onUpdate:modelValue":a[10]||(a[10]=a=>e.params.cid=a),placeholder:"例：cid"},null,8,["modelValue"])])),_:1}),y(w,{label:"发布状态",prop:"status",rules:[{required:!0,message:"请选择字符集",trigger:"blur"}]},{default:f((()=>[y(N,{modelValue:e.params.status,"onUpdate:modelValue":a[11]||(a[11]=a=>e.params.status=a),class:"ml-4"},{default:f((()=>[y(x,{value:"1",size:"large"},{default:f((()=>[_("草稿")])),_:1}),y(x,{value:"2",size:"large"},{default:f((()=>[_("发布")])),_:1})])),_:1},8,["modelValue"])])),_:1}),y(w,null,{default:f((()=>[y(L,{type:"primary",onClick:a[12]||(a[12]=e=>g.submit("params"))},{default:f((()=>[_("保存")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["model"])])}],["__scopeId","data-v-756d99b7"]]))}}}));
