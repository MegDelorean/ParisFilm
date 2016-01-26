/*angular.module('appMaps', ['uiGmapgoogle-maps'])
    .controller('mainCtrl', function($scope, $log) {
        $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 }
        $scope.options = {scrollwheel: false};
        $scope.marker = {
            coords: {
                latitude: 40.1451,
                longitude: -99.6680
            },
            show: false,
            id: 0
        };

        $scope.windowOptions = {
            visible: false
        };

        $scope.onClick = function() {
            $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };

        $scope.closeClick = function() {
            $scope.windowOptions.visible = false;
        };

        $scope.title = "Window Title!";
    });*/

//Angular App Module and Controller

routeAppControllers.controller('MapCtrl',['$scope', 'filmsDataService', '$window', '$timeout', function($scope, filmsDataService, $window, $timeout){
$window.navigator.geolocation.getCurrentPosition(function(position) {

    $scope.message = "Explorer";
	$scope.icone = "explorer-icone.png";
			/* var lat = position.coords.latitude;
            var lng = position.coords.longitude; */
        // On code lat et lng en dur pour simuler que nous nous trouvons dans Paris
		var count = 0;
		var pinurl = "green"
        var lat = 48.8558956;
        var lng = 2.3388959000000114;
		var slide = false;

        //$timeout(function(){
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
        //})


        var mapOptions = {
            zoom: $scope.zoom,
            center: new google.maps.LatLng($scope.lat,$scope.lng),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var directionsDisplay;
		directionsDisplay = new google.maps.DirectionsRenderer();
		directionsDisplay.setMap($scope.map);
		directionsDisplay.setOptions( { suppressMarkers: true} );


		$scope.$watch('selected', function () {
           window.setTimeout(function()
		   {
				google.maps.event.trigger(map, 'resize');
           },100);
         });

        //Affichage de notre localisation
        var myLoc = new google.maps.Marker({
            map: $scope.map,
            position: {lat: $scope.mylat, lng: $scope.mylng},
            icon: 'images/me.png',
            title: "Votre position",
        });

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow({maxWidth: 170});



           filmsDataService.getFilms().then(function(data){
            for (i = 0; i < data.data.length; i++){
                if(data.data[i].lat !== 0) { createMarker(data.data[i]) };
            }
            $scope.movies = data.data;
        })

        var createMarker = function(info){
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.lng),
                title: info.titre,
				icon: {
				url: 'images/'+pinurl+'.png',
				}

            });
            google.maps.event.addListener(marker, 'click', function(){
                var data = [];
                data = jsonSyncLoad( "http://www.omdbapi.com/?t="+info.titre+"&y=&plot=full&r=json" );
                if(data.Director == undefined ) {
                    marker.content = '<div class="infoWindowContent"><div id ="content"><p><b>Réalisateur :</b> '+ info.real+'</p><button ng-click ="">GO!</button></div></div>';
                }
                else {
                    marker.content = '<div class="infoWindowContent"><img src="'+ data.Poster+'"></img><div id ="content"><p><b>Réalisateur :</b> '+ data.Director+'</p><p><b>Sortie :</b> ' + data.Year +'</p><p><b>Genre :</b> '+ data.Genre+ '</p><p><b>Acteurs :</b> '+data.Actors+'</p><button ng-click ="">GO!</button></div></div>';
					console.log(data.Poster);
                }
                    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                    infoWindow.open($scope.map, marker);
					$scope.calcRoute(info.lat, info.lng);

                });
			count ++;
			if (count%2 == 0)
			{
				pinurl = "yellow"
			}
			else if (count %3 == 0)
			{
				pinurl = "pink"
			}
			else if (count %5 == 0)
			{
				pinurl ="blue";
			}
			else if (count %7 == 0)
			{
				pinurl ="grey";
			}
			else
			{
				pinurl ="green"
			}
            $scope.markers.push(marker);
        }

		//Fonction pour le calcul d'itineraires
		$scope.calcRoute = function(latitude,longitude)
		{

           current_pos = new google.maps.LatLng($scope.mylat,$scope.mylng);
           end_pos = new google.maps.LatLng(latitude,longitude);


           var dirService = new google.maps.DirectionsService();



           var request = {
               origin:current_pos,
               destination:end_pos,
               travelMode: google.maps.TravelMode.WALKING
           };


           dirService.route(request, function(result, status) {
               if (status == google.maps.DirectionsStatus.OK) {
                    console.log("ok");
                    directionsDisplay.setDirections(result);
                }
                else{
                    console.log("pas ok :(");
                }
        });

           directionsDisplay.setPanel(document.getElementById("map-panel"));
       };

        function jsonSyncLoad( pFile ) {
            var mime      =    "application/json"   ;
            var xmlhttp   =   new XMLHttpRequest()  ;

            xmlhttp.open("GET",pFile,false);
            if (xmlhttp.overrideMimeType)
                xmlhttp.overrideMimeType( mime );

            xmlhttp.send();
            return (xmlhttp.status==200) ? JSON.parse( xmlhttp.responseText ) : null ;
        }

        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }
    });
}]);