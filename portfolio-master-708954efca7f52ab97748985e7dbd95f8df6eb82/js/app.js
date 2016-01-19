var app = angular.module('PortfolioApp', ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'js/views/home.html'
        })
        .when('/#/', {
            controller: 'HomeController',
            templateUrl: 'js/views/home.html'
        })
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'js/views/home.html'
        })
        .when('/projets', {
            controller: 'ProjectController',
            templateUrl: 'js/views/project.html'
        })
        .when('/projets/visuels', {
            controller: 'VisualController',
            templateUrl: 'js/views/visual.html'
        })
        .when('/projets/audio', {
            controller: 'AudioController',
            templateUrl: 'js/views/audio.html'
        })
        .when('/projets/video', {
            controller: 'VideoController',
            templateUrl: 'js/views/video.html'
        })
        .when('/projets/web', {
            controller: 'WebController',
            templateUrl: 'js/views/web.html'
        })
        .when('/projets/litterature', {
            controller: 'LittController',
            //templateUrl: 'js/views/litt.html'
            templateUrl: 'js/views/construct.html'
        })
        .when('/cours', {
            controller: 'CourseController',
            templateUrl: 'js/views/course.html'
        })
        .when('/cours/sciences', {
            controller: 'ScienceController',
            templateUrl: 'js/views/science.html'
        })
        .when('/cours/tutoriels', {
            controller: 'TutoController',
            //templateUrl: 'js/views/tutos.html'
            templateUrl: 'js/views/construct.html'
        })
        .when('/cours/musique', {
            controller: 'MusicController',
            //templateUrl: 'js/views/music.html'
            templateUrl: 'js/views/construct.html'
        })
        .when('/cours/litterature', {
            controller: 'LittcController',
            //templateUrl: 'js/views/littc.html'
            templateUrl: 'js/views/construct.html'
        })
        .when('/communaute', {
            controller: 'CommunityController',
            //templateUrl: 'js/views/community.html'
            templateUrl: 'js/views/community.html'
        })
        .when('/cv', {
            controller: 'CurriculumController',
            templateUrl: 'js/views/curriculum.html'
        })
        .when('/contact', {
            controller: 'ContactController',
            templateUrl: 'js/views/contact.html'
        })
        .when('/links', {
            controller: 'LinksController',
            templateUrl: 'js/views/links.html'
        })
        .otherwise({
            redirecTo: '/home'
        });
});

app.config(['$sceProvider', function($sceProvider) {
    $sceProvider.enabled(true);
}]);