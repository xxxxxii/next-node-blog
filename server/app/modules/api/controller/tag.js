const Chan = require("chanjs");
let {api: { success }} = Chan.helper;

const {
  api: {
    service: { tag },
  },
} = Chan.modules;

class tagController  {

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await tag.create(body);
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await tag.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await tag.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await tag.detail(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 列表
  static async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const pageSize = 50;
      const data = await tag.list(cur, pageSize);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }


  static async has(req, res, next) {
    try {
      const path = req.query.path;
      const data = await tag.has(path);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 搜索
  static async search(req, res, next) {
    try {
      const cur = req.query.cur;
      const key = req.query.keyword;
      const pageSize = req.query.pageSize || 10;
      const data = await tag.search(key, cur, pageSize);
      
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = tagController;
