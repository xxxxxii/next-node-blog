const Chan = require('chanjs');
let knex = Chan.knex;

const BaseService = require('./base');
const axios = require('axios')
const iconv = require('iconv-lite');

class CollectService {
  static model = 'collect';

  static async common(url, charset) {
    try {
      const { data } = await axios.get(url, {
        responseType: 'arraybuffer',
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36',
          'Referer': url,
          'Accept-Language': 'zh-CN,zh;q=0.9'
        }
      })
      return charset == 1 ? data : iconv.decode(data, 'gb2312')
    } catch (err) {
      return err;
    }
  }

  // 增加
  static async create(body) {
    try {
      const result = await BaseService.insert(CollectService.model, body);
      return result ? 'success' : 'fail';
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(CollectService.model).where('id', '=', id).del()
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
      const result = await knex(CollectService.model).where('id', '=', id).update(body)
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
      const total = await knex(CollectService.model).count('id', { as: 'count' });
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex.select(['id', 
      'taskName', 
      'pages', 
      'updatedAt', 
      'charset', 
      'titleTag',
      'articleTag',
      'parseData',
      'status','cid'])
        .from(CollectService.model)
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
      const data = await knex(CollectService.model)
      .where('id', '=', id)
      .select(['id', 'taskName', 'targetUrl', 
      'listTag', 'startNum','endNum','increment','pages',
      'titleTag','articleTag','charset','parseData','status','cid'])
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
      const total = await knex.raw(sql, [CollectService.model]);
      // 翻页
      const offset = parseInt((cur - 1) * pageSize);
      const sql_list = `SELECT p.id,p.taskName,p.targetUrl,p.updatedAt,p.charset,p.status FROM ? p WHERE p.taskName LIKE '%${key}%' ORDER BY id DESC LIMIT ?,?`;
      const list = await knex.raw(sql_list, [CollectService.model, offset, parseInt(pageSize)]);
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

module.exports = CollectService;
