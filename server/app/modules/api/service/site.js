const BaseService = require("./base");

const Chan = require("chanjs");
let knex = Chan.knex;

class SiteService  {
  static model = "site";
  
  // 基本信息
  static async find() {
    try {
      let res = await BaseService.all(SiteService.model);
      return res[0];
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 更新基本信息
  static async updateInfo(body) {
    const { id } = body;
    delete body.id;

    try {
      if (id) {
        const result = await knex(SiteService.model)
          .where("id", "=", id)
          .update(body);
        return result ? "success" : "fail";
      } else {
        const result = await BaseService.insert(SiteService.model,body);
        return result ? "success" : "fail";
      }
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  //  更新seo
  static async updateSeo(body) {
    const { id } = body;
    delete body.id;
    try {
      if (id) {
        const result = await knex(SiteService.model)
          .where("id", "=", id)
          .update(body);
        return result ? "success" : "fail";
      } else {
        const result = await BaseService.insert(SiteService.model,body);
        return result ? "success" : "fail";
      }
    } catch (err) {
      console.error(err)
      return err;
    }
  }
}

module.exports = SiteService;
