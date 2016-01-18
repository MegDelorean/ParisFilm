app.controller('MainController', ['$scope','filmsdata', function($scope, filmsdata) { 
  filmsdata.success(function(data){
    $scope.someFilms = data;
    console.log("controller");

  });
 /* $scope.films = [
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

  ] */

  $scope.myMapControl = {};
}]

);