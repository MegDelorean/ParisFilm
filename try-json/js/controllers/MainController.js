app.controller('MainController', ['$scope','filmsdata', function($scope, filmsdata) { 
  filmsdata.success(function(data){
    $scope.someFilms = data;
    

  });

 
  $scope.myMapControl = {};
}]

);