
const Chan = require("chanjs");
let knex = Chan.knex;
const BaseService = require('./base');
class GatherService {
  static model = 'gather';

  static async common(url) {
    try {
      if (global.fetch) {
        const result = await fetch(url);
        const data = await result.json();
        return data;
      }
      return '当前node版本不支持fetch';
    } catch (err) {
      return err;
    }
  }

  // 增加
  static async create(body) {
    try {
      const result = await BaseService.insert(GatherService.model, body);
      return result ? 'success' : 'fail';
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(GatherService.model).where('id', '=', id).del()
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
      const result = await knex(GatherService.model).where('id', '=', id).update(body)
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
      const total = await knex(GatherService.model).count('id', { as: 'count' });
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex.select(['id', 
      'taskName',
      'targetUrl',
      'parseData',
      'status','cid'])
        .from(GatherService.model)
        .limit(pageSize)
        .offset(offset)
        .orderBy('id', 'desc');
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
      const data = await knex(GatherService.model)
      .where('id', '=', id)
      .select(['id', 'taskName', 'targetUrl', 
      'parseData','status','cid'])
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
      const total = await knex.raw(sql, [GatherService.model]);
      // 翻页
      const offset = parseInt((cur - 1) * pageSize);
      const sql_list = `SELECT p.id,p.taskName,p.targetUrl,p.updatedAt,p.status FROM ? p WHERE p.taskName LIKE '%${key}%' ORDER BY id DESC LIMIT ?,?`;
      const list = await knex.raw(sql_list, [GatherService.model, offset, parseInt(pageSize)]);
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

module.exports = GatherService;
