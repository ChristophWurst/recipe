
import _ = require('underscore');

class Dispatcher {
	private disp: any;

	constructor() {
		this.disp = _.clone(Backbone.Events);
	}

	public on(event: string, callback?: Function, context?: any): void {
		this.disp.on(event, callback, context);
	}

	public trigger(eventName: string, ...args: any[]): void {
		// TODO: args might not be passed correclty
		this.disp.trigger(eventName, args);
	}
}

export = Dispatcher;