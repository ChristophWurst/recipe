
define({
    Dispatcher: {
        create: {
            module: 'Dispatcher'
        }
    },

    App: {
        create: {
            module: 'App',
            args: {
                $ref: 'Dispatcher'
            }
        },
        ready: {
            start: {}
        }
    },

    /** Services */
    RecipeService: {
        create: {
            module: 'service/RecipeService',
            args: {
                $ref: 'Dispatcher'
            }
        }
    },

    plugins: [
        {
            module: 'wire/debug',
            trace: false
        }
    ]
});