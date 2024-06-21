const dayjs = require("dayjs");
const Chan = require("chanjs");
let {api: { success}} = Chan.helper;

const {
  api: {
    service: { gather },
  },
} = Chan.modules;


class GatherController {
  static model = "gather";

  static async getArticle(req, res, next) {
    try {
      const { targetUrl,parseData} = req.query;
      var data = await gather.common(targetUrl);
      let run = new Function(
        `data`,
       parseData
      );
      let dataend = run(data);
      res.json({ ...success, source: data, data: dataend});
    } catch (error) {
      next(error);
    }
  }

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await gather.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await gather.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await gather.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const id = req.query.id;
      const data = await gather.detail(id);
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
      const pageSize = 10;
      const data = await gather.search(key, cur, pageSize);
      data.list.forEach((ele) => {
        ele.createdAt = dayjs(ele.createdAt).format("YYYY-MM-DD HH:mm");
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
      let data = await gather.list(cur, pageSize);
      // data.list.forEach((ele) => {
      //   ele.createdAt = dayjs(ele.createdAt).format("YYYY-MM-DD HH:mm");
      // });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = GatherController;
