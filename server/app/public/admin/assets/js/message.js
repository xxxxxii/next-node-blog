import{h as a,A as e}from"./index.js";let t=t=>a({url:"".concat(e.BASE_API,"/api/message/list?cur=").concat(t,"&pageSize=20"),method:"get"}),s=t=>a({url:"".concat(e.BASE_API,"/api/message/create"),method:"post",data:t}),c=t=>a({url:"".concat(e.BASE_API,"/api/message/delete?id=").concat(t),method:"get"}),o=t=>a({url:"".concat(e.BASE_API,"/api/message/update"),method:"post",data:t}),d=t=>a({url:"".concat(e.BASE_API,"/api/message/detail?id=").concat(t),method:"get"});export{c as a,s as c,d,t as l,o as u};
