// js/script.js
'use strict';

/**
 * Déclaration de l'application routeApp
 */
var routeApp = angular.module('routeApp', [
    // Dépendances du "module"
    'ngRoute',
	'routeAppControllers'
]);

/**
 * Configuration du module principal : routeApp
 */
routeApp.config(['$routeProvider',
    function($routeProvider) {

        // Système de routage
        $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })
        .when('/contact/:msg?', {
            templateUrl: 'partials/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);



/**
 * Définition des contrôleurs
 */
var routeAppControllers = angular.module('routeAppControllers', []);


// Contrôleur de la page d'accueil
routeAppControllers.controller('homeCtrl', ['$scope',
	function($scope){
		$scope.message = "Bienvenue sur la page d'accueil";
	}
]);

// Contrôleur de la page de contact
routeAppControllers.controller('contactCtrl', ['$scope','$routeParams',
	function($scope, $routeParams){
		$scope.message = "Laissez-nous un message sur la page de contact !";
        // Si aucun paramètre n'est passé, on met notre phrase initiale
		$scope.msg = $routeParams.msg || "Bonne chance pour cette nouvelle appli !";
	}
]);