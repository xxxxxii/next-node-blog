const BaseService = require("./base");

const Chan = require("chanjs");
let knex = Chan.knex;

class CategoryService  {
  static model = "category";
  // 增
  static async create(body) {
    try {
      const result = await BaseService.insert(CategoryService.model, body);
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(CategoryService.model)
        .where("id", "=", id)
        .del();
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 改
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(CategoryService.model)
        .where("id", "=", id)
        .update(body);
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 查全部栏目
  static async find() {
    try {
      const result = await BaseService.all(CategoryService.model).orderBy("sort", "asc" );
      return result;
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 查栏目
  static async findId(id) {
    try {
      const data = await knex(CategoryService.model)
        .where("id", "=", id)
        .select(['id','pid','seo_title','seo_keywords','seo_description','name','pinyin','path','description','type','url','sort','target','status','mid','list_view','article_view']);
      return data[0];
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 查子栏目
  static async findSubId(id) {
    try {
      const result = await knex(CategoryService.model)
        .where("pid", "=", id)
        .select();
      return result;
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 搜索栏目
  static async search(key) {
    try {
      const result = key
        ? await knex(CategoryService.model)
        .whereRaw("name COLLATE utf8mb4_general_ci LIKE ?", [`%${key}%`])
        .orderBy("sort", "asc" )
        : await knex(CategoryService.model)
        .orderBy("sort", "asc");
      return result;
    } catch (err) {
      console.error(err)
      return err;
    }
  }
}

module.exports = CategoryService;
