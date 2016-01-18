app.controller('MainController', ['$scope','forecast', function($scope, forecast) { 
  forecast.success(function(data){
    $scope.fiveDay = data;
    console.log("controller");

  });
  $scope.films = [
  {
    title:'Orange Mecanique',
    director:'Stanley Kubrick',
    address:'1 rue machin'
  },
   {
    title:'Wrong Cops',
    director:'Quentin Dupieux',
    address:'5 rue machin'
  },
  {
    title:'Trainspotting',
    director:'Danny Boyle',
    address:'10 rue machin'
  },

  ]
}]);