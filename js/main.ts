
define({
	/** Utilities */
	Dispatcher: {
		create: {
			module: 'Dispatcher'
		}
	},
	Logger: {
		create: {
			module: 'util/Logger'
		}
	},

	App: {
		create: {
			module: 'App',
			args: [
				{ $ref: 'Dispatcher' },
				{ $ref: 'Logger' }
			]
		},
		ready: {
			start: {}
		}
	},

	/** Services */
	RecipeService: {
		create: {
			module: 'service/RecipeService',
			args: [
				{ $ref: 'Dispatcher' },
				{ $ref: 'Logger' }
			]
		}
	},

	plugins: [
		{
			module: 'wire/debug',
			trace: false
		}
	]
});