System.register(["./index-legacy.js"],(function(e,t){"use strict";var a,r;return{setters:[e=>{a=e.h,r=e.A}],execute:function(){e("g",(e=>a({url:`${r.BASE_API}/api/gather/getArticle`,method:"get",params:e}))),e("c",(e=>a({url:`${r.BASE_API}/api/gather/create`,method:"post",data:e}))),e("u",(e=>a({url:`${r.BASE_API}/api/gather/update`,method:"post",data:e}))),e("l",(e=>a({url:`${r.BASE_API}/api/gather/list?cur=${e}&pageSize=20`,method:"get"}))),e("a",(e=>a({url:`${r.BASE_API}/api/gather/delete?id=${e}`,method:"get"}))),e("d",(e=>a({url:`${r.BASE_API}/api/gather/detail?id=${e}`,method:"get"})))}}}));
