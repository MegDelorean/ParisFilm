'use strict';

var app = angular.module('app', [
    // Dépendances du "module"
    'ngRoute',
    'routeAppControllers',
    'uiGmapgoogle-maps',
	'hamburger_menu'
]);


app.config(['$routeProvider',
    function($routeProvider) {
        // Système de routage
        $routeProvider
        .when('/home', {
            controller: 'HomeCtrl',
			templateUrl: 'js/views/home.html'
        })
        .when('/carte', {
            controller: 'MapCtrl',
			templateUrl: 'js/views/map.html'
        })
        .when('/ballades', {
            controller: 'BalladesCtrl',
			templateUrl: 'js/views/ballades.html'
        })
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

