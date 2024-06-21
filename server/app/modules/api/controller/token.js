const Chan = require("chanjs");
let {
  utils: { setToken, getToken },
  api: { success },
} = Chan.helper;
const {
  token: { KEY, TIME },
} = Chan.config;

class TokenController {
  // 更新token时间
  static async update(res, req, next) {
    try {
      const username = req.locals.username;
      const uid = req.locals.uid;
      const token = setToken({ username, uid }, KEY, TIME);

      res.json({ ...success, data: { token } });
    } catch (err) {
      next(err);
    }
  }

  // 校验token是否正确
  static async check(req, res, next) {
    try {
      const token = req.query.token;
      const res = await getToken(token, KEY);
      res.json({ ...success, data: { ...res } });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TokenController;
