

const Chan = require("chanjs");
let {api: { success }} = Chan.helper;


const {
  api: {
    service: { model },
  },
} = Chan.modules;

class ModelController  {
  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const has = await model.findByName(body.model_name, body.table_name);
      if (has.length > 0) {
        this.fail({ msg: '模型命名已重复' });
        return;
      }
      const data = await model.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const body = req.body;
      const data = await model.delete(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await model.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await model.detail(id);
      res.json({ ...success, data: data});
    } catch (err) {
      next(err);
    }
  }


  // 是否被使用
  static async hasUse(req, res, next) {
    try {
      const id = req.query.id;
      const data = await model.hasUse(id);
      res.json({ ...success, data:data[0] });
    } catch (err) {
      next(err);
    }
  }

  // 列表
  static async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const pageSize = 10;
      const data = await model.list(cur, pageSize);
      res.json({ ...success, data });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ModelController;
