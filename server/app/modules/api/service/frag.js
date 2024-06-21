const Chan = require("chanjs");
let {utils: { convertArrayToObject }} = Chan.helper;
let knex = Chan.knex;

class FragService  {
  static model = 'frag';
  
  // 新增
  static async create(body) {
    try {
      const result = await knex(FragService.model).insert(body)
      return result ? 'success' : 'fail';
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(FragService.model).where('id', '=', id).del()
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
      const result = await knex(FragService.model).where('id', '=', id).update(body)
      return result ? 'success' : 'fail';
    } catch (err) {
      console.error(err)
      return err;
    }
  }


  // 获取全量frag，默认100个
  static async list(cur = 1, pageSize = 100) {
    try {
      // 查询个数
      // const total = await knex(FragService.model).count('id', { as: 'count' });
     const offset = parseInt((cur - 1) * pageSize);
      const list = await knex.select([ 'name', 'mark','content'])
        .from(FragService.model)
        .limit(pageSize)
        .offset(offset)
        .orderBy('id', 'desc');

       const frags =  convertArrayToObject(list,'mark');
       return frags;
       // const count = total[0].count || 1;
      // return {
      //   count: count,
      //   total: Math.ceil(count / pageSize),
      //   current: +cur,
      //   list: frags,
      // };
    } catch (err) {
      console.error(err)
      return err;
    }
  }


  // 查
  static async detail(id) {
    try {
      const data = await knex.select(['id', 'name', 'mark','content','type'])
      .from(FragService.model)
      .where('id', '=', id);
      return data[0];
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 搜索
  static async search(key = '', cur = 1, pageSize = 10) {

    try {
      // 查询个数
      const total = key ? await knex(FragService.model)
      .whereRaw("name COLLATE utf8mb4_general_ci LIKE ?", [`%${key}%`])
      .count('id', { as: 'count' })
        : await knex(FragService.model).count('id', { as: 'count' });
      // 查询个数
      const offset = parseInt((cur - 1) * pageSize);
      const list = key ? 
      await knex.select(['id', 'name', 'mark'])
        .from(FragService.model)
        .whereRaw("name COLLATE utf8mb4_general_ci LIKE ?", [`%${key}%`])
        .limit(pageSize)
        .offset(offset)
        .orderBy('id', 'desc') 
        : await knex.select(['id', 'name', 'mark'])
          .from(FragService.model)
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
      console.error(err)
      return err;
    }
  }

}

module.exports =  FragService;
