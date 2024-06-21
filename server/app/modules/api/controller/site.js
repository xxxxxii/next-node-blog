const Chan = require("chanjs");
let {api: { success }} = Chan.helper;

const path = require('path');


const {
  api: {
    service: { site },
  },
} = Chan.modules;

class SiteController  {

  // 查
  static async find(req, res, next) {
    try {
      const data = await site.find();
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }


  // 增 
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await site.create(body);
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await site.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async updateInfo(req, res, next) {
    try {
      const body = req.body;
      const data = await site.updateInfo(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  static async updateSeo(req, res, next) {
    try {
      const body = req.body;
      const data = await site.updateSeo(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async findId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await site.find(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 获取磁盘信息
  static async runEnv(req, res, next) {
    try {
      const dirname = path.join(__dirname, '../../../../');
      res.json({ ...success, data:{dirname: dirname} });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = SiteController;
