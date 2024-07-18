const dayjs = require("dayjs");

const Chan = require("chanjs");
let {
  utils: { getIp, getToken },
  api: { success },
} = Chan.helper;

const {
  api: {
    service: { blogCategory },
  },
} = Chan.modules;

class BlogCategoryController {
  // 增
  static async create(req, res, next) {
    try {
      const { config } = req.app.locals;
      const token = req.cookies.token;
      const user = await getToken(token, config.token.KEY);
      let body = {
        uid: user.uid,
        ip: getIp(req),
      };
      const data = await blogCategory.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const data = await blogCategory.delete();
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 列表
  static async list(req, res, next) {
    try {
      const { pageSize, cur } = req.query;
      let data = await blogCategory.find();
      for (let i = 0; i < data.length; i++) {
        let child = await blogCategory.findTree(data[i]?.id);
        data[i]["tags"] = child;
      }
      res.json({ ...success, data });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = BlogCategoryController;
