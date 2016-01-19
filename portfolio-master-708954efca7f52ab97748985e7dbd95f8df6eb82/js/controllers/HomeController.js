app.controller('HomeController', ['$scope', function($scope) {

	// Projets encours 
	$scope.projects = [
		{
			name: "ShuttleOFX - Présenté à l'Open Source Summit de Paris",
			preview: "img/projets/shuttleOFXLogo.png",
			link: "http://student.openworldforum.paris/projet/shuttleofx/",
			descriptiona: "La platforme ShuttleOFX est conçue pour encourager le " + 
			"partage de plugins de traitement d’images entre les créateurs de plugins " + 
			"(industriels, hobbyistes, universitaires, étudiants) et les graphistes.",
			descriptionb: "Le projet est même présenté à l'Open Source Summit à Paris " +
			"le 18 Novembre 2015. Vous pouvez même voter pour notre projet sur :",
			linkb: "http://student.openworldforum.paris/projet/shuttleofx/"
		}
	]

}]);