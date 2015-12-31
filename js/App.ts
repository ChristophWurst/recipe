import Marionette = require('backbone.marionette');
import Dispatcher = require('Dispatcher');
import Logger = require('util/Logger');

class Application extends Marionette.Application {

	private dispatcher: Dispatcher;
	private logger: Logger;

	public constructor(dispatcher: Dispatcher, logger: Logger) {
		super();

		this.dispatcher = dispatcher;
		this.logger = logger;
	}

	public start() {
		super.start();
		this.logger.log("Starting recipe app");

		this.dispatcher.trigger('app:started');
		this.dispatcher.trigger('recipes:load');
	}
}

export = Application;