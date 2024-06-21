
const Chan = require("chanjs");
let {api: { success}} = Chan.helper;

const {
  api: {
    service: { menu },
  },
} = Chan.modules;

class MenuController  {

  // 查
  static async find(req, res, next) {
    try {
      const data = await menu.find();
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await menu.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = MenuController;
