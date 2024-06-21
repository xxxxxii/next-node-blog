const path = require("path");
const open = require(`./plugin/router.js`);

/**
 * @description 处理路由
 * @param {*} app
 * @param {*} router
 */
const routers = (app, router) => {
  const {
    config: { template = "default", APP_PATH },
  } = app;

  //开源api（非自动加载模式）
  router.use("/open", open);

  //机器人抓取
  router.get("/robots.txt", function (req, res, next) {
    res.type("text/plain");
    res.sendFile(path.join(APP_PATH, "/public/robots.txt"));
  });

  //404处理
  router.use((req, res, next) => {
    let ip = req.headers["x-forwarded-for"] || req.ip;
    console.log("404-->", `${req.method}-${decodeURI(req.url)}-${ip}`);
    res.render(`${template}/404.html`);
  });

  //处理错误
  router.use((err, req, res) => {
    console.error("500-->", req.method, req.url, err);
    let data = { url: req.url, method: req.method, error: err.message };
    if (req.is("html") || req.is("html") == null) {
      res.render(`${template}/500.html`, { data });
    } else {
      res.json({ code: 500, data, msg: data.error });
    }
  });
};

module.exports = routers;
