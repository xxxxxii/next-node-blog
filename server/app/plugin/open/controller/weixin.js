


const Chan = require('chanjs');
const {config,knex,helper: {utils:{filterBody},api:{success, fail}}} = require('chanjs');
class WeiXinController {
  constructor(props) {
    this.model = "weixin";
  }

  //微信小程序登录
  static async login(req, res, next) {
    try {
      const { code, userInfo } = req.body;
      const { appid, secret } = config.weixin;
      const { avatarUrl, nickName } = userInfo;
      const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`;
      const result = await fetch(url);
      const { openid, session_key, unionid } = result.json();
      // 设置token
      const token = setToken(
        { openid: openid },
        config.token.KEY,
        config.token.TIME
      );
      // console.log(req.headers)
      // 加密返回token,获取token解密然后通过openid或者unionid来查询
      // openid: "oy9xU5F3p5UPSRv3D8lhEfJkbqGI"
      // userInfo:
      // avatarUrl: ""
      // city: ""
      // country: ""
      // gender: 0
      // language: "zh_CN"
      // nickName: "明空"
      // province: ""
      res.json({
        ...success,
        data: {
          openid,
          token,
          avatarUrl,
          nickName,
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = WeiXinController;
