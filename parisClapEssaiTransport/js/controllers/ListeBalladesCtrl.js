routeAppControllers.controller('ListeBalladesCtrl', ['$scope',
	function($scope){
		$scope.message = "Liste des Balades";
		$scope.ballades = [ {
			nom : 'Nouvelle Vague ',
			desc :'Découvrez les lieux de tournages des films emblématiques de la Nouvelle Vague. Ce mouvement cinématographique de la fin des années 50 renouvelle le 7 ème art avec une nouvelle génération de réalisateurs tels que François Truffant, Jean-Luc Godard, Eric Rohmer ou encore Agnès Varda. Cette balade vous propose un aperçu des grands classiques de ce mouvement.',
			img : 'images/ballades/nv.jpg'
	}];
	}
]);