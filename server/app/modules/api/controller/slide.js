
const dayjs = require('dayjs');
const Chan = require("chanjs");
let {api: { success}} = Chan.helper;

const {
  api: {
    service: { slide },
  },
} = Chan.modules;


class SlideController {

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await slide.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await slide.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await slide.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await slide.detail(id);
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
      const cid = req.query.cid || 0; // 所属栏目
      const pageSize = req.query.pageSize || 10;
      const data = await slide.search(key, cur, pageSize, +cid);
      data.list.forEach(ele => {
        ele.updatedAt = dayjs(ele.updatedAt).format('YYYY-MM-DD HH:mm:ss');
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
      const cid = req.query.cid;
      const pageSize = 10;
      const data = await slide.list(cur, pageSize, cid);
      data.list.forEach(ele => {
        ele.updatedAt = dayjs(ele.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 上传图片
  static async upload(req, res, next) {
    try {
      let file = req.files;
      const { originalname, filename, path } = file[0];
      res.json({
        ...success, data: {
          link: path.replace('app', ''),
          domain: req.hostname,
          originalname,
          filename,
          path: '/' + path.replace(/\\/g, "/").replace(/^app\//, "")
        }
      });
    } catch (err) {
      next(err);
    }
  }
  
}

module.exports = SlideController;
