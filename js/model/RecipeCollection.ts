/// <reference path="../typings/tsd.d.ts" />

import Backbone = require('backbone');
import Recipe = require('model/Recipe');

class RecipeCollection extends Backbone.Collection<Recipe> {
	model = Recipe;
}

export = RecipeCollection;