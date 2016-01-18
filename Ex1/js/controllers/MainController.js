app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Meilleurs films'; 
  $scope.promo = 'Decouvrez les  films tournés à Paris'
  $scope.films = [
  	{ 
    	titre: 'Le fabuleux destin d Amelie Poulain', 
    	realisateur: 'Jean-Pierre JEUNET', 
    	date: '2000', 
    	cover: 'http://ecx.images-amazon.com/images/I/71sBZgwRBYL._SL1300_.jpg',
		synopsis :'Le synopsis du film...',
		acteurs :'Audrey TAUTOU',
		lieux :'Rue Lepic (18e),Rue Mouffetard (5e),Rue des Trois Freres (18e)',
    	likes: 0,
    	dislikes: 0 
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.films[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
  	$scope.films[index].dislikes += 1; 
	};
}]);