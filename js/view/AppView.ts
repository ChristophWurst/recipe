import Marionette = require('backbone.marionette');
import Dispatcher = require('Dispatcher');

class AppView extends Marionette.RegionManager {

	private dispatcher: Dispatcher;

	regions: any = {
		content: '#app-content-wrapper'
	}

	public constructor(dispatcher: Dispatcher) {
		super();
		this.dispatcher = dispatcher;
	}
}

export = AppView;