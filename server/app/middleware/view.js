const path = require("path");
module.exports = (app) => {
  const {
    config: { appRoot, views,env },
  } = app.locals;
  //默认home view
  const home = path.join(appRoot, `modules/home/view`);
  //合并插件中的view
  const all = [...views, home];
  
  app.set("view options", {
    debug: env != "prd",
    cache: env == "prd",
    minimize: true,
  });
  app.set("view engine", "html");
  app.set("views", all);
  app.engine(".html", require("express-art-template"));
};
