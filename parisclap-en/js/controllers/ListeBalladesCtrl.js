routeAppControllers.controller('ListeBalladesCtrl', ['$scope',
	function($scope){
		$scope.message = "All the walks";
		$scope.ballades = [ {
			nom : 'Nouvelle Vague ',
			desc :'Discover the shooting locations of the most iconic movies of the "Nouvelle vague" This cinema movement of the late 50’s revolutionized the movie world with a new generation of directors such as François Truffaut , Jean -Luc Godard, Eric Rohmer or Agnès Varda. This walk will offer you a glimpse of greatest movies of this movement.',
			img : 'images/ballades/nv.jpg'
	}];
	}
]);
