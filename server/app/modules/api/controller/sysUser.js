const dayjs = require("dayjs");
const svgCaptcha = require("svg-captcha");

const Chan = require("chanjs");
let {
  utils: { setToken, getToken, md5 },
  api: { success, fail },
} = Chan.helper;

let config = Chan.config;

const {
  api: {
    service: { sysUser },
  },
} = Chan.modules;

class SysUserController {
  // 登录
  static async login(req, res, next) {
    try {
      const { config } = req.app.locals;
      let { username, password } = req.body;
      const pass = md5(password + config.secretcms.key);
      const result = await sysUser.find(username, pass);
      if (result) {
        const { id, status } = result;
        // 设置token
        const token = setToken(
          { uid: id, username },
          config.token.KEY,
          config.token.TIME
        );
        const data = { status, username, token };
        res.json({ ...success, data: data });
      } else {
        res.json({ ...fail, data: null, msg: "登录失败" });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      body.password = md5(body.password + config.secretcms.key);
      const data = await sysUser.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const id = req.query.id;
      const data = await sysUser.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      body.password = md5(body.password + config.secretcms.key);
      const data = await sysUser.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      let uid = req.query.id;
      if(!uid){
        const token = req.cookies.token;
        if(!token){
          return res.json({ ...fail, data: null, msg: "请先登录" });
        }
        const user = await getToken(token, config.token.KEY);
        uid = user.uid;
      }
      const data = await sysUser.detail(uid);
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
      const data = await sysUser.search(key, cur, pageSize);
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
      let data = await sysUser.list(cur, pageSize);
      data.list.forEach((ele) => {
        ele.createdAt = dayjs(ele.createdAt).format("YYYY-MM-DD HH:mm");
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 获取验证码
  static async captcha(req, res, next) {
    try {
      const captcha = svgCaptcha.create({
        size: 4,
        fontSize: 36,
        width: 100,
        height: 32,
        ignoreChars: "0oO1ilI", // 验证码字符中排除 0o1i
        noise: 3,
        // background: '#cc9966',
      });
      res.cookie("captcha", captcha.text);
      res.type = "image/svg+xml"; // 知道你个返回的类型
      res.end(captcha.data); // 返回一张图片
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SysUserController;
