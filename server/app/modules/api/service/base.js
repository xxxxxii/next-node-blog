const Chan = require('chanjs');
const knex = Chan.knex;
class BaseService {
	constructor() {
	}

	static all(model) {
		return knex(model).select()
	}

	static detail(model,id){
		return knex(model).where('id', '=', id).select()
	}

	static insert(model,params) {
		return knex(model).insert(params)
	}

	static update(model,id, params) {
		return knex(model).where('id', '=', id).update(params)
	}

	static delete(model,id) {
		return knex(model).where('id', '=', id).del()
	}
}

module.exports = BaseService;