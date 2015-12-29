/// <reference path="typings/tsd.d.ts" />

import Dispatcher = require('Dispatcher');

class Application extends Marionette.Application {

    private dispatcher: Dispatcher;

    public constructor(dispatcher: Dispatcher) {
        super();

        this.dispatcher = dispatcher;
    }

    public start() {
        super.start();
        console.log("Starting recipe app");

        this.dispatcher.trigger('app:started');
    }
}

export = Application;