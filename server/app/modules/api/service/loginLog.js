const Chan = require("chanjs");
let knex = Chan.knex;

class LoginLogService {
  static model = 'login_log';
  // 增加
  static async create(body) {
    try {
      const result = await knex(LoginLogService.model)
      .insert(body);
      return result ? 'success' : 'fail';
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 删除100条之外的数据
  static async delete() {
    try {
      const result = knex(LoginLogService.model)
      .whereNotIn('id', function() {
        this.select('id').from(LoginLogService.model).orderBy('createdAt', 'desc').limit(100).as('recent_logs');
      })
      .del();
      return result ? 'success' : 'fail';
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 列表
  static async list(cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = await knex(LoginLogService.model).count('id', { as: 'count' });
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex(LoginLogService.model)
        .leftJoin('sys_user', 'login_log.uid', 'sys_user.id')
        .select('login_log.*', 'sys_user.username')
        .offset(offset)
        .limit(pageSize)
        .orderBy('createdAt', 'desc')

      const count = total[0].count || 1;
      return {
        count: count,
        total: Math.ceil(count / pageSize),
        current: +cur,
        list: list,
      };
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}

module.exports = LoginLogService;
