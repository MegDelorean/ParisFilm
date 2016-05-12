app.controller('WindowCtrl', ['$scope', function($scope){
    $scope.calcRoute = function (latitude, longitude, mylat, mylng, selectedMode) {
        //var selectedMode = document.getElementById('travelType').value;
        current_pos = new google.maps.LatLng(mylat,mylng);
        end_pos = new google.maps.LatLng(latitude,longitude);
        var dirService = new google.maps.DirectionsService();
        var request = {
           origin:current_pos,
           destination:end_pos,
           travelMode: google.maps.TravelMode[selectedMode]
        };
        //JUSTE AU DESSUS : choix du mode de transport (WALKING)
        dirService.route(request, function(result, status) {
           if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            }
            else {
                console.log("Itinéraire raté");
            }
        });

        directionsDisplay.setPanel(document.getElementById("map-panel"));
    }

	$scope.show == true;
}])




routeAppControllers.controller('MapCtrl2', ['$scope', 'filmsDataService', '$window', '$timeout', '$log', function($scope, filmsDataService, $window, $timeout, $log){

    //$window.navigator.geolocation.getCurrentPosition(function(position) {
        $scope.message = "Carte";
        $scope.icone = "explorer-icone.png";

        /*$scope.filtres = [
            "false",
            "Action",
            "Adventure",
            "Comedy",
            "Crime",
            "Documentary",
            "Drama",
            "Romance",
            "Short",
            "Thriller"
        ]*/
        //Valeur par défaut des filtres
        $scope.fi = 'false';

/*        var lat = position.coords.latitude;
        var lng = position.coords.longitude;*/
        var lat = 48.854667;
        var lng = 2.347735;

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
                $scope.zoom = 16;
            }
            else
            {
                //Si nous sommes hors du perimetre : on centre sur Paris
                $scope.lat =48.856614;
                $scope.lng = 2.3522219000000177;
                $scope.zoom = 16;
            }
        //});

        directionsDisplay = new google.maps.DirectionsRenderer();

        $scope.map = {
            center: {
                latitude: $scope.lat,
                longitude: $scope.lng
            },
            zoom: $scope.zoom,
            events: {
                tilesloaded: function (map) {
                    $scope.$apply(function () {
                        directionsDisplay.setMap(map);
                        directionsDisplay.setOptions( { suppressMarkers: true, preserveViewport:true} );
                        $scope.removeDirection = function(){
                            directionsDisplay.setDirections({routes: []});
                            //directionDisplay.set(null);
                        }
                    });
                }
            }
        }

        document.getElementsByClassName("ng-scope").height = screen.height;

        $scope.options = {scrollwheel: true};

        $scope.myLoc = {
            coords: {
                latitude: $scope.mylat,
                longitude: $scope.mylng
            },
            options: {
                icon: 'images/me.png'
            },
            show: false,
            id: 0
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

        $scope.moviesMarkers = [];
        $scope.windowOptions = {};
        filmsDataService.getFilms().then(function(data){
            var markers = [];
            for (var i = 0; i < data.data.length; i++) {
                if(data.data[i].lat !== 0) {
                    markers.push(createMarker(i, data.data[i]))
                }

                /*else {
                    //$timeout(function(){
                        gpsdata = [];
                    gpsdata= jsonSyncLoad("http://maps.googleapis.com/maps/api/geocode/json?address="+data.data[i].adr);
                    if (gpsdata.results[0].geometry.location.lat != undefined && gpsdata.results[0].geometry.location.lng!= undefined) {
                        data.data[i].lat = gpsdata.results[0].geometry.location.lat;
                        data.data[i].lng = gpsdata.results[0].geometry.location.lng;

                    };
                    //}, 200);
                }*/
                //markers.push(createMarker(i, data.data[i]));
            }

            $scope.moviesMarkers = markers;
        });

        $scope.onMarkerClicked = function(marker) {
            _.each($scope.moviesMarkers, function(mker) {
                mker.showWindow = false;
            });
            marker.showWindow = true;
        };
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
                //ComedyThriller
                case "Comedy, Thriller":
                    return "ComedyThriller";
                //ComedyDrama
                case "Comedy, Drama":
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
                    return "DramaRomance";
                //Drama
                case "Drama":
                case "Short, Drama":
                case "Crime, Drama":
                case "Biography, Drama":
                    return "Drama";
                //ActionThriller
                case "Action, Thriller":
                case "Action, Crime, Thriller":
                    return "ActionThriller";
                //ActionAdventure
                case "Action, Adventure, Sci-Fi":
                    return "ActionAdventure";
                //Action
                case "Action":
                    return "Action";
                //AdventureRomance
                case "Adventure, Drama, Romance":
                    return "AdventureRomance";
                //Adventure
                case "Adventure":
                case "Short, Adventure, Biography":
                    return "Adventure";
                //Romance
                case "Short, Romance":
                    return "Romance";
                //Thriller
                case "Thriller":
                case "Mystery, Thriller":
                case "Crime, Thriller":
                    return "Thriller";

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
        var createMarker = function(i, info, idKey){
            if(info.genre) var colorM = colorMarker(info.genre);
            else colorM = "Other";

            if (idKey == null) {
                idKey = "id";
            }
            var newMarker = {
                id: i,
                coords: {
                    latitude: info.lat,
                    longitude: info.lng
                },
                title: info.titre,
                show: false,
                options: {
                    icon:'images/mapPins/' + colorM + '.png'
                },
                events: {
                    /*dragend: function (marker, eventName, args) {*/
                    click: function(){

                        //$scope.calcRoute(info.lat, info.lng);
                        //NON$scope.windowOptions.show = true;
                    }
                },
                templateParameter: {
                    infos: info
                },
                windowOptions: {
                    show: false,
                    closeClick: function() {
                        this.show = false;
                    },
                    options: {
                        maxWidth: 190,
						minWidth: 180
                    },
                    /*templateUrl: "./js/views/markerWindow.html",*/
                    templateParameter: {},
                    control: {}
                }
            };
            return newMarker;
        };
    //});
}]);
