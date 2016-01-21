//Angular App Module and Controller

app.controller('MapCtrl',['$scope', 'filmsDataService', '$window', function($scope, filmsDataService, $window){
$window.navigator.geolocation.getCurrentPosition(function(position) {

        filmsDataService.getFilms().then(function(data){
            for (i = 0; i < data.data.length; i++){
                if(data.data[i].lat !== 0) { createMarker(data.data[i]) };
            }
            $scope.movies = data.data;
        })


        /* var lat = position.coords.latitude;
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
                $scope.zoom = 16;
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

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
		directionsDisplay = new google.maps.DirectionsRenderer();
		directionsDisplay.setMap($scope.map);

        //Affichage de notre localisation
        var myLoc = new google.maps.Marker({
            map: $scope.map,
            position: {lat: $scope.mylat, lng: $scope.mylng},
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            title: "Votre position",
        });

//////////////////////////////////////MEGANE BDD///////////////////////////////////////

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function(info){
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.lng),
            title: info.titre
        });	
		
        google.maps.event.addListener(marker, 'click', function(){
			//Chargement d'autres infos par une api externe
			var data = [];
			data = jsonSyncLoad( "http://www.omdbapi.com/?t="+info.titre+"&y=&plot=full&r=json" );
			if(data.Director == undefined ) {
				marker.content = '<html ng-app="mapsApp"><div class="infoWindowContent" ng-controller="MapCtrl"><p>'+ info.real+'</p><button ng-click="calcRoute('+info.lat+','+info.lng+')">Go!</button></div></html>';
			}
			else {
				marker.content = '<html ng-app="mapsApp"><div class="infoWindowContent" ng-controller="MapCtrl"><p>'+ data.Director+'</p> <p>' + data.Year +'</p><p>'+ data.Genre+ '</p><p>'+data.Actors+'</p><button ng-click="calcRoute('+info.lat+','+info.lng+')">Go!</button></div></html>';
			}
				infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
				infoWindow.open($scope.map, marker);
				
				$scope.calcRoute(info.lat, info.lng);
				
			});
			

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



