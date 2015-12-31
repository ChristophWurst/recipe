import Recipe = require('model/Recipe');
import RecipeCollection = require('model/RecipeCollection');
import Dispatcher = require('Dispatcher');
import Logger = require('util/Logger');

class RecipeService {

	private dispatcher: Dispatcher;
	private logger: Logger;

	public constructor(dispatcher: Dispatcher, logger: Logger) {
		this.dispatcher = dispatcher;
		this.logger = logger;

		this.dispatcher.on('recipes:load', this.loadAll, this);
	}

	public loadAll(): void {
		this.logger.debug('loading recipes');

		var _this = this;
		setTimeout(function() {
			// TODO: remove fake delay

			var data = [
				{ id: 1, name: 'Marillenknödel' },
				{ id: 2, name: 'Kaiserschmarrn' }
			];
			var result = new RecipeCollection();
			data.forEach(function(r) {
				result.add(new Recipe(r));
			});

			_this.logger.debug('recipes loaded');
			_this.dispatcher.trigger('recipes:loaded', result);
		}, 120);
	}
}

export = RecipeService;