import Model = require('model/Model');

class Recipe extends Model {
	private defauls = {
		name: ''
	}

	public getId(): number {
		return this.get('id');
	}
}

export = Recipe;