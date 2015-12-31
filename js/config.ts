
require.config({
	baseUrl: './../../../apps/recipe/js',
	urlArgs: 't=' + new Date().getTime(),
	paths: {
		backbone: 'vendor/backbone/backbone',
		'backbone.marionette': 'vendor/backbone.marionette/lib/backbone.marionette',
		underscore: 'vendor/underscore/underscore-min'
	},
	packages: [
		{ name: 'wire', location: 'vendor/wire', main: 'wire' },
		{ name: 'when', location: 'vendor/when', main: 'when' },
		{ name: 'meld', location: 'vendor/meld', main: 'meld' },
		{ name: 'poly', location: 'vendor/poly', main: 'poly' }
	]
});

require(['wire!main']);