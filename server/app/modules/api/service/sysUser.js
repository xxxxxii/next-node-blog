const BaseService = require("./base");
const Chan = require("chanjs");
const knex = Chan.knex;

class SysUserService {
  static model = 'sys_user';

  // 登录
  static async find(username, password) {
    try {
      const res = await knex(`${SysUserService.model}`).where({
        username: `${username}`,
        password: `${password}`
      }).select(['id', 'username', 'status']);
      return res[0];
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 增加
  static async create(body) {
    try {
      const result = await BaseService.insert(SysUserService.model, body);
      return result ? 'success' : 'fail';
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(SysUserService.model).where('id', '=', id).del()
      return result ? 'success' : 'fail';
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 修改
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(SysUserService.model).where('id', '=', id).update(body)
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
      const total = await knex(SysUserService.model).count('id', { as: 'count' });
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex('sys_user as u')
      .select('u.id','u.username', 'u.role_id','u.status', 'r.name', 'r.value')
      .leftJoin('sys_role as r', 'u.role_id', 'r.id')
        .limit(pageSize)
        .offset(offset)
        .orderBy('u.id', 'asc');
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

  // 查
  static async detail(id) {
    try {
      const data = await knex('sys_user as u')
      .select('u.username', 'u.role_id','u.status', 'u.id','r.name', 'r.value')
      .leftJoin('sys_role as r', 'u.role_id', 'r.id')
      .where('u.id', id)
      return data[0];
    } catch (err) {
      return err;
    }
  }

  // 搜索
  static async search(key = '', cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const sql = `SELECT COUNT(id) as count FROM ? p  WHERE p.name LIKE '%${key}%'`;
      const total = await knex.raw(sql, [SysUserService.model]);
      // 翻页
      const offset = parseInt((cur - 1) * pageSize);
      const sql_list = `SELECT p.id,p.name,p.mark FROM ? p WHERE p.name LIKE '%${key}%' ORDER BY id DESC LIMIT ?,?`;
      const list = await knex.raw(sql_list, [SysUserService.model, offset, parseInt(pageSize)]);
      const count = total[0].count || 1;
      return {
        count: count,
        total: Math.ceil(count / pageSize),
        current: +cur,
        list: list[0],
      };
    } catch (err) {
      return err;
    }
  }

}

module.exports = SysUserService;
