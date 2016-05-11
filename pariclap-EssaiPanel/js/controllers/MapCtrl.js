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
                if(data.data[i].lat !== 0) {
                 createMarker(data.data[i])
                }
                else {
                 gpsdata = [];

                 gpsdata= jsonSyncLoad("http://maps.googleapis.com/maps/api/geocode/json?address="+data.data[i].adr+"&sensor=false");

                    if(gpsdata.results[0].geometry.location.lat != undefined && gpsdata.results[0].geometry.location.lng!= undefined) {
                    data.data[i].lat = gpsdata.results[0].geometry.location.lat;
                    data.data[i].lng = gpsdata.results[0].geometry.location.lng;
                    createMarker(data.data[i])


                    };
                }
            }
            $scope.movies = data.data;
        })
           // gpsdatatest = [];
            //gpsdatatest = jsonSyncLoad("http://maps.googleapis.com/maps/api/geocode/json?address=546%20rue%20Baruch%20de%20Spinoza,%20Avignon&sensor=false");
                 //console.log(gpsdatatest);
                 //console.log(gpsdatatest.results[0].geometry.location.lat);




        var createMarker = function(info){

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
                    console.log(data.Poster);
                    marker.content = '<div class="infoWindowContent"><img src="'+ data.Poster+'"></img><p>'+ data.Director+'</p> <p>' + data.Year +'</p><p>'+ data.Genre+ '</p><p>'+data.Actors+'</p><p>'+data.Plot+'</p></div>';
                    }

                    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content + '<button ng-dblclick="'+$scope.calcRoute(info.lat, info.lng)+'">Go!</button>');
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


