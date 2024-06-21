const path = require("path");

/**
 * @description 根目录
 */
const ROOT_PATH = process.cwd();

/**
 * @description 程序目录
 */
const APP_PATH = path.join(ROOT_PATH, "app");

const config = {};
config.version = "v3.0.1";
config.appName = "ChanCms";
config.port = "81";
config.versionTime = "2024-06-09";
config.author = "明空";
config.authorEmail = "867528315@qq.com";
config.authorWechat = "yanyutao2014";
config.appRoot = path.join(__dirname, "../");

// cookie sign key
config.keys = "chanyue-cms_202301032044";

config.token = {
  KEY: "chanyue-cms", // JSON WEB TOKEN KEY
  TIME: "1d", // 失效时间 10
};

config.secretcms = {
  key: "chanyue-cms", // md5 加盐
};

// 关闭csrf
config.security = {
  csrf: {
    enable: false,
  },
};

// 配置上传
config.multipart = {
  fileSize: "50mb",
  mode: "stream",
  whitelist: [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".zip",
    ".gz",
    ".tgz",
    ".gzip",
    ".mp3",
    ".mp4",
    ".avi",
  ],
  fileExtensions: [".pdf", ".txt"], // 扩展几种上传的文件格式
};

// 模板配置
config.static = {
  prefix: "/public/",
  dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
  dir: ["app/public"],
  maxAge: 0, // in prod env, 0 in other envs
  buffer: false, // in prod env, false in other envs
  preload: false,
};

config.views = [path.join(APP_PATH, `plugin/open/view`)];

module.exports = config;
