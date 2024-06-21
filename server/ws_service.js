/* 
send(data [,options][,callback])
       data：发送的数据
       options对象(可选)：
         (1)compress：指定数据是否需要压缩。默认为true
         (2)binary：指定数据是否通过二进制传送。默认是自动检测
         (3)mask：指定是否应遮罩数据。
         (4)fin：指定数据是否为消息的最后一个片段。默认为true
 */
const WebSocket = require("ws");
// 创建WebSocket服务端的对象，绑定的端口号是9998
const wss = new WebSocket.Server({
  port: 9998,
});
module.exports.listener = () => {
  wss.on("connection", (ws, req) => {
    console.log("有客户端连接成功了", ws, req);
    // 对客户端的连接对象进行message事件的监听
    // 当客户端有消息发送给服务器时，服务器就能够触发该消息
    // msg:由客户端发给服务端的数据
    ws.on("message", (msg) => {
      console.log("客户端发送给服务器端", msg);
      // 当接收到客户端传的参数之后服务器端可以执行某些操作(具体看需求)
      // 小编这里是做了一个数据返回给客户端
      // 是当客户端连接成功之后会发送一条信息告诉服务器，服务器监听到信息之后再返回数据给客户端
      const data = [
        [80, 110, 150, 60, 30, 130, 110],
        [80, 120, 150, 80, 40, 120, 112],
        [80, 130, 150, 40, 70, 133, 115],
        [80, 140, 150, 30, 80, 110, 110],
        [80, 130, 150, 70, 100, 140, 115],
        [80, 120, 180, 90, 90, 150, 120],
        [80, 100, 120, 90, 80, 120, 160],
      ];
      let i = 0;
      setInterval(() => {
        if (i === data.length) {
          i = 0;
        }
        // ========发送数据给客户端========
        ws.send(JSON.stringify(data[i]));
        i++;
      }, 1000);
      // 由服务端往客户端发送数据
    });
    // 监听要关闭连接的函数
    ws.on("close", function close() {
      // 这里面关闭的逻辑
      console.log("WebSocket连接已关闭");
    });
  });
};
