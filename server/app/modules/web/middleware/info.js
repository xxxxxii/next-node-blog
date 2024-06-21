const Chan = require("chanjs");
const { appName, version } = Chan.config;

//获取版本
module.exports = (res) => {
    res.setHeader("X-Powered-By", appName);
    res.setHeader("ChanCMS", version);
};