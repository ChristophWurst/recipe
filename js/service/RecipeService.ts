
import Recipe = require('model/Recipe');
import Dispatcher = require('Dispatcher');

class RecipeService {

    public constructor(dispatcher: Dispatcher) {
        dispatcher.on('app:started', function() {
            console.log("app started event received");
        });
    }

    public getAll(): Backbone.Collection<Recipe> {
        return new Backbone.Collection<Recipe>();
    }
}

export = RecipeService;