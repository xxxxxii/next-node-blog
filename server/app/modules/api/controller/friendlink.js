
const dayjs = require('dayjs');
const Chan = require("chanjs");
let {api: { success}} = Chan.helper;

const {
  api: {
    service: { friendlink },
  },
} = Chan.modules;


class FriendlinkController  {

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      body.createdAt = dayjs(body.createdAt).format('YYYY-MM-DD HH:mm:ss');
      const data = await friendlink.create(body);
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await friendlink.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }


  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await friendlink.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async find(req, res, next) {
    try {
      const id = req.query.id;
      const data = await friendlink.find(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await friendlink.detail(id);
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
      const data = await friendlink.search(key, cur, pageSize);
      data.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:mm');
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  
  static async list(req, res, next) {
    try {
      const cur = req.query.cur;
      const pageSize = 10;
      const data = await friendlink.list(cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:mm');
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = FriendlinkController;
