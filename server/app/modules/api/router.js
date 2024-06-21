const Chan = require("chanjs");
const auth = require("../../middleware/auth.js");
let { upload } = Chan.helper.upload;
const cors = require("cors");
const OpenController = require("../../plugin/open/controller/index.js");
const HomeController = require("../web/controller/home.js");
module.exports = (opt) => {
  const {
    router,
    modules: {
      api: { controller },
    },
    app,
  } = opt;

  app.all("*", function (req, res) {
    res.header("Access-Control-Allow-Methods", "GETs,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    // res.header("Content-Type", "application/json;charset=utf-8");
    req.next();
  });
  app.use(
    cors({
      allowedHeaders: ["Content-Type", "Authorization"],
      exposedHeaders: ["Authorization"],
    })
  );

  // 60s
  router.get("/60s", OpenController.news60s);

  // 验证码
  router.get("/captcha", controller.sysUser.captcha);

  // 首页
  router.get("/webfont/home", HomeController.index);

  // 登录
  router.post("/sysUser/login", controller.sysUser.login);
  router.get("/sysUser/list", controller.sysUser.list);
  router.get("/sysUser/search", controller.sysUser.search);
  router.get("/sysUser/detail", auth(), controller.sysUser.detail);
  router.post("/sysUser/create", auth(), controller.sysUser.create);
  router.get("/sysUser/delete", auth(), controller.sysUser.delete);
  router.post("/sysUser/update", auth(), controller.sysUser.update);

  // 站点信息
  router.get("/site/find", auth(), controller.site.find);
  router.post("/site/updateInfo", auth(), controller.site.updateInfo);
  router.post("/site/updateSeo", auth(), controller.site.updateSeo);
  router.get("/site/runEnv", controller.site.runEnv);
  router.get("/sysApp/find", controller.sysApp.find);
  router.get("/sysApp/views", controller.sysApp.getViews);
  router.get("/sysApp/config", controller.sysApp.config);
  router.post("/sysApp/update", auth(), controller.sysApp.update);

  // 网站栏目
  router.get("/category/find", controller.category.find);
  router.get("/category/findId", controller.category.findId);
  router.get("/category/findSubId", controller.category.findSubId);
  router.get("/category/search", controller.category.search);
  router.get("/category/delete", auth(), controller.category.delete);
  router.post("/category/update", auth(), controller.category.update);
  router.post("/category/create", auth(), controller.category.create);

  // 文章栏目
  router.get("/article/list", controller.article.list);
  router.get("/article/tongji", controller.article.tongji);
  router.get("/article/search", controller.article.search);
  router.get("/article/detail", controller.article.detail);
  router.get("/article/findField", auth(), controller.article.findField);
  router.post("/article/create", auth(), controller.article.create);
  router.get("/article/delete", auth(), controller.article.delete);
  router.post("/article/update", auth(), controller.article.update);

  //上传
  router.post("/upload", auth(), upload.any(), controller.article.upload);

  // 七牛云相关
  router.get("/qiniu/getUploadToken", controller.qiniu.getUploadToken);
  router.post("/qiniu/upload", auth(), upload.any(), controller.qiniu.upload);

  // 模型管理
  router.get("/model/list", controller.model.list);
  router.get("/model/detail", controller.model.detail);
  router.get("/model/hasUse", auth(), controller.model.hasUse);
  router.post("/model/create", auth(), controller.model.create);
  router.post("/model/delete", auth(), controller.model.delete);
  router.post("/model/update", auth(), controller.model.update);

  // 字段管理
  router.get("/field/list", controller.field.list);
  router.get("/field/detail", controller.field.detail);
  router.post("/field/create", auth(), controller.field.create);
  router.get("/field/delete", auth(), controller.field.delete);
  router.post("/field/update", auth(), controller.field.update);

  // 碎片管理
  router.get("/frag/list", controller.frag.list);
  router.get("/frag/search", controller.frag.search);
  router.get("/frag/detail", controller.frag.detail);
  router.post("/frag/create", auth(), controller.frag.create);
  router.get("/frag/delete", auth(), controller.frag.delete);
  router.post("/frag/update", auth(), controller.frag.update);

  // tag标签管理
  router.get("/tag/list", controller.tag.list);
  router.post("/tag/create", auth(), controller.tag.create);
  router.get("/tag/detail", controller.tag.detail);
  router.get("/tag/has", controller.tag.has);
  router.get("/tag/search", controller.tag.search);
  router.get("/tag/delete", auth(), controller.tag.delete);
  router.post("/tag/update", auth(), controller.tag.update);

  // 友情链接
  router.get("/friendlink/list", controller.friendlink.list);
  router.get("/friendlink/detail", controller.friendlink.detail);
  router.post("/friendlink/create", auth(), controller.friendlink.create);
  router.get("/friendlink/delete", auth(), controller.friendlink.delete);
  router.post("/friendlink/update", auth(), controller.friendlink.update);

  // 留言管理
  router.get("/message/list", controller.message.list);
  router.get("/message/search", controller.message.search);
  router.get("/message/detail", controller.message.detail);
  router.post("/message/create", controller.message.create);
  router.get("/message/delete", auth(), controller.message.delete);
  router.post("/message/update", auth(), controller.message.update);

  // 轮播管理
  router.get("/slide/list", controller.slide.list);
  router.get("/slide/search", controller.slide.search);
  router.get("/slide/detail", controller.slide.detail);
  router.post("/slide/create", auth(), controller.slide.create);
  router.get("/slide/delete", auth(), controller.slide.delete);
  router.post("/slide/update", auth(), controller.slide.update);

  //页面采集
  router.post("/collect/getPages", controller.collect.getPages);
  router.post("/collect/getArticle", controller.collect.getArticle);
  router.get("/collect/list", controller.collect.list);
  router.get("/collect/search", controller.collect.search);
  router.get("/collect/detail", controller.collect.detail);
  router.post("/collect/create", auth(), controller.collect.create);
  router.get("/collect/delete", auth(), controller.collect.delete);
  router.post("/collect/update", auth(), controller.collect.update);

  //接口采集
  router.get("/gather/getArticle", controller.gather.getArticle);
  router.get("/gather/list", controller.gather.list);
  router.get("/gather/search", controller.gather.search);
  router.get("/gather/detail", controller.gather.detail);
  router.post("/gather/create", auth(), controller.gather.create);
  router.get("/gather/delete", auth(), controller.gather.delete);
  router.post("/gather/update", auth(), controller.gather.update);

  //角色管理
  router.get("/sysRole/list", auth(), controller.sysRole.list);
  router.post("/sysRole/create", auth(), controller.sysRole.create);
  router.get("/sysRole/delete", auth(), controller.sysRole.delete);
  router.post("/sysRole/update", auth(), controller.sysRole.update);
  router.get("/sysRole/detail", auth(), controller.sysRole.detail);

  //系统菜单
  router.get("/sysMenu/find", auth(), controller.menu.find);
  router.post("/sysMenu/update", auth(), controller.menu.update);

  //登录日志
  router.post("/loginLog/create", auth(), controller.loginLog.create);
  router.get("/loginLog/delete", auth(), controller.loginLog.delete);
  router.get("/loginLog/list", auth(), controller.loginLog.list);

  //配置前缀
  app.use("/api", router);
};
