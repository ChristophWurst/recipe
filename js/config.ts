/// <reference path="typings/tsd.d.ts" />

declare var curl: any;

var config = {
    baseUrl: './../../../apps/recipe/js',
    paths: {
        backbone: 'vendor/backbone/backbone',
        marionette: 'vendor/backbone.marionette/lib/backbone.marionette',
        underscore: 'vendor/underscore/underscore-min'
    },
    packages: [
        { name: 'curl', location: 'vendor/curl/src/curl', main: 'curl' },
        { name: 'wire', location: 'vendor/wire', main: 'wire' },
        { name: 'when', location: 'vendor/when', main: 'when' },
        { name: 'meld', location: 'vendor/meld', main: 'meld' },
        { name: 'poly', location: 'vendor/poly', main: 'poly' }
    ]
};

curl(config, ['wire!main'])