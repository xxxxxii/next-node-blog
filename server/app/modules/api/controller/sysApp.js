const Chan = require("chanjs");
let {
  utils: { getHtmlFilesSync },
  api: { success },
} = Chan.helper;

const path = require("path");

const {
  api: {
    service: { sysApp },
  },
} = Chan.modules;

class SysAppController {
  // 查
  static async find(req, res, next) {
    try {
      const data = await sysApp.find();
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async getViews(req, res, next) {
    try {
      const {
        config: { APP_PATH, template },
      } = req.app.locals;
      const viewsPath = path.join(APP_PATH, `/modules/web/view/${template}`);
      const data = getHtmlFilesSync(viewsPath);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }
  // app配置
  static async config(req, res, next) {
    try {
      const data = await sysApp.config();
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await sysApp.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SysAppController;
