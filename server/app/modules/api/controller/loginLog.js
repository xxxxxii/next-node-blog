const dayjs = require("dayjs");

const Chan = require("chanjs");
let {utils: { getIp, getToken},api: { success }} = Chan.helper;

const {
  api: {
    service: { loginLog },
  },
} = Chan.modules;


class LoginLogController {
  // 增
  static async create(req, res, next) {
    try {
      const {config} = req.app.locals;
      const token = req.cookies.token;
      const user = await getToken(token, config.token.KEY);
      let body = {
        uid:user.uid,
        ip: getIp(req),
      };
      const data = await loginLog.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const data = await loginLog.delete();
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 列表
  static async list(req, res, next) {
    try {
      const { pageSize, cur } = req.query;
      let data = await loginLog.list(cur, pageSize);
      data.list.forEach((ele) => {
        ele.createdAt = dayjs(ele.createdAt).format("YYYY-MM-DD HH:mm:ss");
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = LoginLogController;
