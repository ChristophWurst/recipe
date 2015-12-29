/// <reference path="typings/tsd.d.ts" />

require.config({
    baseUrl: './../../../apps/recipe/js',
    paths: {
        backbone: 'vendor/backbone/backbone',
        marionette: 'vendor/backbone.marionette/lib/backbone.marionette',
        underscore: 'vendor/underscore/underscore-min'
    }
});

require([
    'start'
]);