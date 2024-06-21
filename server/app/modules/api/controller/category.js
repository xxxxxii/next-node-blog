


const Chan = require("chanjs");
let {api: { success }} = Chan.helper;

const {
  api: {
    service: { category },
  },
} = Chan.modules;

class CategoryController {

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await category.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await category.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await category.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async find(req, res, next) {
    try {
      const data = await category.find();
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async findId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await category.findId(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查子栏目
  static async findSubId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await category.findSubId(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 搜索栏目
  static async search(req, res, next) {
    try {
      const q = req.query.q;
      const data = await category.search(q);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = CategoryController;
