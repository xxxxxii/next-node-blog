const BaseService = require("./base");
const Chan = require("chanjs");
let knex = Chan.knex;

class MenuService  {
  static model = "sys_menu";
  
  // 基本信息
  static async find() {
    try {
      let res = await BaseService.all(MenuService.model);
      return res[0];
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 更新基本信息
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(MenuService.model)
          .where("id", "=", id)
          .update(body);
        return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      return err;
    }
  }

}

module.exports = MenuService;
