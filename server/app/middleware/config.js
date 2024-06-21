const SysAppService = require("../modules/api/service/sysApp.js");
const Chan = require('chanjs');

// 所有配置入口
module.exports = async function (app) {
  try {
    let config  = Chan.config;
    let sysconfig = await SysAppService.find();
    if(sysconfig.errno){
      app.use((req,res,next)=>{
        next(sysconfig)
      })
    }
    //静态资源缓存
    sysconfig.maxAge = sysconfig.maxAge == "1" ? "1d" : 0;
    app.locals.config = { ...config, ...sysconfig };
    if (config.debug) {
        console.log("config", app.locals.config);
      }
  } catch (error) {
    console.log(error);
  }
};
