
const dayjs = require('dayjs');
const Chan = require("chanjs");
let {api: { success}} = Chan.helper;

const {
  api: {
    service: { frag },
  },
} = Chan.modules;

class FragController  {

  // 增
 static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await frag.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await frag.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await frag.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async find(req, res, next) {
    try {
      const data = await frag.find();
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await frag.detail(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查子栏目
  static async findSubId(req, res, next) {
    try {
      const id = req.query.id;
      const data = await frag.findSubId(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 搜索
  static async search(req, res, next) {
    try {
      const {cur,keywords,pageSize= 20} = req.query
      const data = await frag.search(keywords, cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:mm');
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 列表
  static async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const pageSize = 10;
      const data = await frag.list(cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:mm');
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = FragController;
