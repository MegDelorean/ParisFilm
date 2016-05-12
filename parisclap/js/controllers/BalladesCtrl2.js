// Contrôleur de la page ballades
routeAppControllers.controller('BalladesCtrl2',['$scope', 'balladeDataService2', '$window', '$timeout', function($scope, balladeDataService2, $window, $timeout){
//$window.navigator.geolocation.getCurrentPosition(function(position) {

    $scope.message = "COMIQUE FRANCAIS";
/*          var lat = position.coords.latitude;
            var lng = position.coords.longitude;*/
        // On code lat et lng en dur pour simuler que nous nous trouvons dans Paris
        var lat = 48.854667;
        var lng = 2.347735;


        //$timeout(function(){
            //$scope.$apply(function(){
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
           // });
        //})


        var mapOptions = {
            zoom: $scope.zoom,
            center: new google.maps.LatLng($scope.lat,$scope.lng),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setOptions( { suppressMarkers: true, preserveViewport:true} );
        directionsDisplay.setMap($scope.map);

        //Affichage de notre localisation
        var myLoc = new google.maps.Marker({
            map: $scope.map,
            position: {lat: $scope.mylat, lng: $scope.mylng},
            icon: 'images/me.png',
            title: "Votre position",
        });

        $scope.markers = [];


        var infoWindow = new google.maps.InfoWindow();

        var colorMarker = function(genre) {
            var filtres = [
                "Action",
                "Adventure",
                "Comedy",
                "Horror",
                "Drama",
                "Romance",
                "Thriller"
            ];

            switch (genre) {
                //ComedyDrama
                case "Comedy, Drama, Music":
                    return "ComedyDrama";
                //ComedyRomance
                case "Comedy, Romance":
                case "Comedy, Drama, Romance":
                    return "ComedyRomance";
                //Comedy
                case "Comedy":
                    return "Comedy";
                //Horror
                case "Drama, Horror":
                case "Drama, Horror, Thriller":
                    return "Horror";
                //DramaRomance
                case "Drama, Romance":
                case "Crime, Drama, Romance":
                    return "DramaRomance";
                //Drama
                case "Drama":
                case "Crime, Drama":
                    return "Drama";
                case genre.substring(0, genre.indexOf(",", 0)):

                //Other
                default:
                    for(var i = 0; i<7; i++){
                        if(genre.substring(0, genre.indexOf(",", 0)) === filtres[i]){
                            return filtres[i];
                        }
                    }
            }
            return "Other";
        }
        var createMarker = function(info){
            // gestion couleur marqueur
            console.log(info);
            if(info.genre) var colorM = colorMarker(info.genre);
            else colorM = "Other";

            console.log("create Marker");

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.lng),
                title: info.titre,
                options: {
                    icon:'images/mapPins/' + colorM + '.png'
                }
            });
            google.maps.event.addListener(marker, 'click', function(){
                var data = [];
                marker.content = '<div class="infoWindowContent"><img src="'+info.poster+'"></img><div id ="content" class="content"><p><b>Réalisateur :</b> '+ info.real+'</p><p><b>Sortie :</b> ' + info.year +'</p><p><b>Genre :</b> '+ info.genre+ '</p><p><b>Acteurs :</b> '+info.Actors+'</p></div>';
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
        }


        $scope.calcRoute = function(latitude,longitude)
        {
            console.log("latitude : " +latitude+ ", longitude : " + longitude);
            current_pos = new google.maps.LatLng($scope.mylat,$scope.mylng);
            end_pos = new google.maps.LatLng(latitude,longitude);
            console.log(end_pos);
            var dirService = new google.maps.DirectionsService();

            var first = new google.maps.LatLng(48.868388, 2.3340830); // Le Corniaud
            console.log("first : " + first);
            var second = new google.maps.LatLng(48.873097, 2.332039); //Le père Noël est une ordure
            console.log("second : " + second);
            var third = new google.maps.LatLng(48.871160,  2.332060); //La Grande Vadrouille
            console.log("third : " + third);

            var request = {
                origin: current_pos,
                destination: end_pos,
                waypoints: [
                    {location: first, stopover: true},
                    {location: second, stopover: true},
                    {location: third, stopover: true}
                ],
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode.WALKING
            };

            console.log(request);

           dirService.route(request, function(result, status) {
               if (status == google.maps.DirectionsStatus.OK) {

                console.log("result"+result);
                    result.routes[0].legs[0].end_address = "Le Corniaud";
                    result.routes[0].legs[1].end_address = "Le père Noël est une ordure";
                    result.routes[0].legs[2].end_address = "La Grande Vadrouille";
                    result.routes[0].legs[3].end_address = "L'Aile ou la Cuisse";

                    directionsDisplay.setDirections(result);

                        balladeDataService2.getFilms().then(function(data){
                        for (i = 0; i < data.data.length; i++){
                             if(data.data[i].lat !== 0) {
                                createMarker(data.data[i])
                                console.log(data.data[i]);
                            }

                         }
                         $scope.movies = data.data;
                        })

                }
                else{
                    console.log("pas ok :(");
                }
            });

            directionsDisplay.setPanel(document.getElementById("map-panel"));
            //destination finale de l'itinéraire :
       };
       // L'Aile ou la Cuisse
        var finallat = 48.864632;
        var finallng = 2.294124;

        $scope.calcRoute(finallat,finallng);


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


    //});
}]);

