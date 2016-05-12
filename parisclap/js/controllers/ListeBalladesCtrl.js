routeAppControllers.controller('ListeBalladesCtrl', ['$scope',
	function($scope){

		$scope.message = "Liste des Balades";
		$scope.ballades = [
			{
				lien : '#/baladeNouvelleVague',
				nom : 'Nouvelle Vague ',
				desc :'Découvrez les lieux de tournages des films emblématiques de la Nouvelle Vague. Ce mouvement cinématographique de la fin des années 50 renouvelle le 7 ème art avec une nouvelle génération de réalisateurs tels que François Truffant, Jean-Luc Godard, Eric Rohmer ou encore Agnès Varda. Cette balade vous propose un aperçu des grands classiques de ce mouvement.',
				img : 'images/ballades/nv.jpg'
			},
			{
				lien : '#/baladeComiqueFrancais',
				nom : 'Cinéma comique à la française',
				desc :'Grâce à cette balade, vous pourrez découvrir les films comiques français les plus célèbres. La France est connue pour le talent de ses acteurs comiques comme Bourvil et De Funès, mais également pour ses réalisateurs comme par exemple Gérard Oury. Cette balade vous propose un aperçu des lieux emblématiques de quelques films comiques français.',
				img : 'images/ballades/cf.jpg'
			}
		];
	}
]);