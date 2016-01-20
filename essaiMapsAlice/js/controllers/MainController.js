app.controller('MainController', ['$rootScope','filmsdata', function($rootScope, filmsdata) {
  filmsdata.success(function(data){
    $rootScope.someFilms = data;
    console.log("controller");

  });

  $rootScope.myMapControl = {};
}]

);