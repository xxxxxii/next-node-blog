
const dayjs = require('dayjs');
const Chan = require("chanjs");
let {api: { success}} = Chan.helper;
const {
  api: {
    service: { message },
  },
} = Chan.modules;

class MessageController  {

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await message.create(body);
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }


  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await message.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await message.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }
  

  // 查
  static async find(req, res, next) {
    try {
      const id = req.query.id;
      const data = await message.find(id);
      data.createdAt = dayjs(data.createdAt).format('YYYY-MM-DD HH:mm:ss');
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }
 

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await message.detail(id);
      data.createdAt = dayjs(data.createdAt).format('YYYY-MM-DD HH:mm:ss');
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }
  


  // 搜索
  static async search(req, res, next) {
    try {

      const {cur,keyword,pageSize=20} = req.query;
      const data = await message.search(key, cur, pageSize);
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
      const {cur,pageSize=20} = req.query;
      const data = await message.list(cur, pageSize);
      data.list.forEach(ele => {
        ele.createdAt = dayjs(ele.createdAt).format('YYYY-MM-DD HH:mm');
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = MessageController;
