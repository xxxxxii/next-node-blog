const Chanjs = require("chanjs");
const chan = new Chanjs();
const config = require("./app/middleware/config.js");
chan.beforeStart(async () => {
  await config(chan.app);
});
chan.start(() => {
  console.log("ChanCMS 启动成功");
  // console.log(Chanjs.modules);
});
chan.run();

// 监听开启的websocket服务器
const websocketservice = require("./ws_service");
websocketservice.listener();
