'use strict';

var app = angular.module('app', [
    // Dépendances du "module"
    'ngRoute',
    'routeAppControllers',
    'uiGmapgoogle-maps',
    'hamburger_menu',
    'elif'
]);


app.config(['$routeProvider',
    function($routeProvider) {
        // Système de routage
        $routeProvider
        .when('/home', {
            controller: 'MapCtrl2',
			templateUrl: 'js/views/map2.html'
        })
        /*.when('/carte', {
            controller: 'MapCtrl',
			templateUrl: 'js/views/map.html'
        })*/
        .when('/carte2', {
            controller: 'MapCtrl2',
			templateUrl: 'js/views/map2.html'
        })
        .when('/carte3', {
            controller: 'MapCtrl3',
			templateUrl: 'js/views/map3.html'
        })/*
        .when('/ballades', {
            controller: 'BalladesCtrl',
			templateUrl: 'js/views/ballades.html'
        })*/
        .when('/parametres', {
            controller: 'ParamCtrl',
			templateUrl: 'js/views/parametres.html'
        })
        .when('/apropos', {
            controller: 'AproposCtrl',
			templateUrl: 'js/views/apropos.html'
        })
        .otherwise({
	      	redirectTo: '/home'
	    });
    }
]);

var routeAppControllers = angular.module('routeAppControllers', []);
