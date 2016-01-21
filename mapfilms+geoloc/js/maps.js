//Angular App Module and Controller
var app = angular.module('mapsApp', []);
app.controller('MapCtrl',['$scope', '$http', '$window', function($scope, $http, $window)
{
		$window.navigator.geolocation.getCurrentPosition(function(position) {

		/* 	var lat = position.coords.latitude;
			var lng = position.coords.longitude; */

			// On code lat et lng en dur pour simuler que nous nous trouvons dans Paris
			var lat = 48.863811;
			var lng = 2.345753;

			$scope.$apply(function(){

			// Récuperation des données pour le marqueur de position
			$scope.mylat = lat;
			$scope.mylng = lng;

				// Test périmetre

				if ( (lat > 48.81229 ) && (lat < 48.905351) && (lng < 2.423) && (lng > 2.243443) )
				{
					//Si nous sommes dans le perimetre : on centre sur notre position
					$scope.lat = lat;
					$scope.lng = lng;
					$scope.zoom = 15;

				}
				else
				{
					//Si nous sommes hors du perimetre : on centre sur Paris
					$scope.lat =48.856614;
					$scope.lng = 2.3522219000000177;
					$scope.zoom = 12;
				}

			});

			var mapOptions = {
			zoom: $scope.zoom,
			center: new google.maps.LatLng($scope.lat,$scope.lng),
			mapTypeId: google.maps.MapTypeId.TERRAIN
			}

			$scope.movies = [];
			$http.get('js/films.json')
				.success(function(data) {
				  for (i = 0; i < data.length; i++){
					if(data[i].lat !== 0) { createMarker(data[i]) };
				  }
				  $scope.movies = data;
				})
				.error(function(data,status,error,config){
					$scope.movies = [{heading:"Error",description:"Could not load json data"}];
				});


		$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

		//Affichage de notre localisation
		var myLoc = new google.maps.Marker({
		map: $scope.map,
		position: {lat: $scope.mylat, lng: $scope.mylng},
		icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
		title: "Votre position",
		});

		//Affichage des films
		$scope.markers = [];
		var infoWindow = new google.maps.InfoWindow();

		var createMarker = function(info){
		  var marker = new google.maps.Marker({
			  map: $scope.map,
			  position: new google.maps.LatLng(info.lat, info.lng),
			  title: info.titre
		  });

		marker.content = '<div class="infoWindowContent">'
	+ info.real + '</div>';

			google.maps.event.addListener(marker, 'click', function(){
				infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
				infoWindow.open($scope.map, marker);
			});

			$scope.markers.push(marker);

		}

		$scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

	});

}]);