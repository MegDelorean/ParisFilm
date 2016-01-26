app.controller('WindowCtrl', ['$scope', function($scope){
/*        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }
        $scope.closeClick = function(){
            $scope.windowOptions.visible = false;
        }
        $scope.windowOptions = {
            visible: true
        }*/
}])




routeAppControllers.controller('MapCtrl2', ['$scope', 'filmsDataService', '$window', '$timeout', '$log', function($scope, filmsDataService, $window, $timeout, $log){

    $window.navigator.geolocation.getCurrentPosition(function(position) {
/*        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
<<<<<<< HEAD
        }
        $scope.closeClick = function(){
            $scope.windowOptions.show = false;
        }
        $scope.windowOptions = {
            show: false,
			maxWidth: 190
=======
        }*/
/*        $scope.closeClick = function(){
            $scope.windowOptions.visible = false;
        }*/
        $scope.windowOptions = {
            show: false,
            closeClick: function() {
                this.show = false;
            },
            options: {}
>>>>>>> 3a5cabea3414c429be792baa87cf8c71d1e310cd
        }

/*        window: {
            marker: {},
            show: false,
            closeClick: function() {
                this.show = false;
            },
            options: {} // define when map is ready
        }*/

/*
        $scope.clickGo = function(info){
            $scope.calcRoute(info.lat, info.lng);
<<<<<<< HEAD
        }

        $scope.message = "Explorer";
		$scope.icone = "explorer-icone.png";
=======
        }*/
        $scope.message = "Explorer";
        $scope.icone = "explorer-icone.png";
>>>>>>> 3a5cabea3414c429be792baa87cf8c71d1e310cd
        $scope.filtres = [
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
         /*var lat = position.coords.latitude;
            var lng = position.coords.longitude;*/

        var lat = 48.863811;
        var lng = 2.345753;
        /*$scope.zoom = 15;*/

/*        $timeout(function(){
            console.log("TIMEOUT COUCOU !")*/
            $scope.$apply(function(){
                // Récuperation des données pour le marqueur de position
                $scope.mylat = lat;
                $scope.mylng = lng;
                // Test périmetre
                if ( (lat > 48.81229 ) && (lat < 48.905351) && (lat < 2.423) && (lat > 2.243443) )
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
                    $scope.zoom = 14;
                }
            });
        /*}, 3000)*/
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
                        directionsDisplay.setOptions( { suppressMarkers: true} );
                        //console.log(directionsDisplay)
                    });
                }
            }
        }
        $scope.options = {scrollwheel: true};


        /**/

/*        $scope.lat = 48.863811;
        $scope.lng = 2.345753;*/
        $scope.myLoc = {
            coords: {
                latitude: $scope.mylat,
                longitude: $scope.mylng
            },
            options: {
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
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
            //console.log($scope.moviesMarkers);
        })

        var createMarker = function(i, info, idKey){
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
                events: {
                    /*dragend: function (marker, eventName, args) {*/
                    click: function(){
<<<<<<< HEAD
                        $scope.calcRoute(info.lat, info.lng)
						$scope.windowOptions.show = true;
=======
                        $scope.calcRoute(info.lat, info.lng);
                        //NON$scope.windowOptions.show = true;
>>>>>>> 3a5cabea3414c429be792baa87cf8c71d1e310cd
                    }
                },
                templateParameter: {
                    infos: info
                }
            };

            return newMarker;
        }
        //Fonction pour le calcul d'itineraires
        $scope.calcRoute = function(latitude, longitude)
        {
            /*var latitude = coords.latitude;
            var longitude = coords.longitude;*/
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
            });
}]);


















































































//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Angular App Module and Controller

routeAppControllers.controller('MapCtrl',['$scope', 'filmsDataService', '$window', '$timeout', function($scope, filmsDataService, $window, $timeout){
$window.navigator.geolocation.getCurrentPosition(function(position) {


    $scope.counter = 0;
    $scope.change = function() {
        $scope.counter++;
    };





    $scope.message = "Bienvenue sur la page Carte";
    $scope.filtres = [
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

        filmsDataService.getFilms().then(function(data){
            for (i = 0; i < data.data.length; i++){
                if(data.data[i].lat !== 0) { createMarker(data.data[i], marker_visible) };
            }
            $scope.movies = data.data;
        })

function setMapOnAll(map) {
      for (var i = 0; i < $scope.markers.length; i++) {
        $scope.markers[i].setMap(map);
      }
    }



        $scope.allVal = true;

        var marker_visible = true;

        $scope.allAction= function() {
                marker_visible = false;
        }

        var createMarker = function(info, marker_visible){
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.lng),
                title: info.titre,
                visible: marker_visible
            });
            google.maps.event.addListener(marker, 'click', function(){
                var data = [];
                data = jsonSyncLoad( "http://www.omdbapi.com/?t="+info.titre+"&y=&plot=full&r=json" );
                if(data.Director == undefined ) {
                    marker.content = '<div class="infoWindowContent"><p>'+ info.real+'</p></div>';
                }
                else {
                    marker.content = '<div class="infoWindowContent"><img src="'+ data.Poster+'"></img><p>'+ data.Director+'</p> <p>' + data.Year +'</p><p>'+ data.Genre+ '</p><p>'+data.Actors+'</p></div>';
                    }
                    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                    infoWindow.open($scope.map, marker);

                    //$scope.calcRoute(info.lat, info.lng);
                });
            $scope.markers.push(marker);
        }

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



        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }
    });
}]);


/*
function calcRoute() {


           current_pos = new google.maps.LatLng(48.8522135,2.3741935000000467);
           end_pos = new google.maps.LatLng(48.86297580000001,2.368132599999967);


           var dirService = new google.maps.DirectionsService();


           var request = {
               origin:current_pos,
               destination:end_pos,
               travelMode: google.maps.TravelMode.DRIVING
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
       }
*/


