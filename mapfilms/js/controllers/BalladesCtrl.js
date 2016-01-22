// Contrôleur de la page ballades
routeAppControllers.controller('BalladesCtrl',['$scope', 'balladeDataService', '$window', '$timeout', function($scope, balladeDataService, $window, $timeout){
$window.navigator.geolocation.getCurrentPosition(function(position) {

    $scope.message = "Bienvenue sur la page Ballades !";
    $scope.filtres = [
        "All",
        "Action",
        "Adventure",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Romance",
        "Short",
        "Thriller"
    ]
        /*  var lat = position.coords.latitude;
            var lng = position.coords.longitude; */
        // On code lat et lng en dur pour simuler que nous nous trouvons dans Paris
        var lat = 48.863811;
        var lng = 2.345753;

        
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
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap($scope.map);

        //Affichage de notre localisation
        var myLoc = new google.maps.Marker({
            map: $scope.map,
            position: {lat: $scope.mylat, lng: $scope.mylng},
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            title: "Votre position",
        });

        $scope.markers = [];
         

        var infoWindow = new google.maps.InfoWindow();
           
           balladeDataService.getFilms().then(function(data){
            for (i = 0; i < data.data.length; i++){
                if(data.data[i].lat !== 0) {
                 createMarker(data.data[i])
                }
                
            }
            $scope.movies = data.data;
        })



        var createMarker = function(info){
        	console.log("yolo");
            
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.lng),
                title: info.titre
            });
            google.maps.event.addListener(marker, 'click', function(){
                var data = [];
                data = jsonSyncLoad( "http://www.omdbapi.com/?t="+info.titre+"&y=&plot=full&r=json" );
                if(data.Director == undefined ) {
                    marker.content = '<div class="infoWindowContent"><p>'+ info.real+'</p></div>';
                }
                else {
                    console.log(data.Poster);
                    marker.content = '<div class="infoWindowContent"><img src="'+ data.Poster+'"></img><p>'+ data.Director+'</p> <p>' + data.Year +'</p><p>'+ data.Genre+ '</p><p>'+data.Actors+'</p><p>'+data.Plot+'</p></div>';
                    }

                    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content );
                    infoWindow.open($scope.map, marker);

                    
                });
            $scope.markers.push(marker);
            
            
        }

        $scope.calcRoute = function(latitude,longitude)
        {
        	console.log("calcroute")
           current_pos = new google.maps.LatLng($scope.mylat,$scope.mylng);
           end_pos = new google.maps.LatLng(latitude,longitude);
         
           var dirService = new google.maps.DirectionsService();

           var first = new google.maps.LatLng(48.823777, 2.364813);
           var second = new google.maps.LatLng(48.850686, 2.3555);
           var third = new google.maps.LatLng(48.853754, 2.354315);

           var request = {

               origin:current_pos,
               destination:end_pos,
               waypoints: [{location: first, stopover: true},
                        {location: second, stopover: true},
                        {location: third, stopover: true}],
               optimizeWaypoints: false,
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
           //destination finale de l'itinéraire :
        

     	 
       };

       var finallat = 48.891695;
        var finallng = 2.380257;
       $scope.calcRoute(finallat,finallng)


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

