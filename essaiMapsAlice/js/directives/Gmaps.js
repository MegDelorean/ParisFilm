

app.directive('myMap', ['$rootScope', function() {

//var name = someFilms.data_name;
console.log(name);
    // directive link function
    var link = function(scope, element, attrs) {

        //scope : {name :someFilms.data_name};
        var map, infoWindow;
        var markers = []; // on déclare un tableau de markers

        // map config
        var mapOptions = {
            center: new google.maps.LatLng(48.9, 2.3),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };

        // init the map
        function initMap() {

            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);

                directionsDisplay = new google.maps.DirectionsRenderer();
                directionsDisplay.setMap(map);
                console.log("initmap");

            }
        }


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



        // place a marker
        function setMarker(map, position, title, content) {
            var marker;
            var markerOptions = {
                position: position,
                map: map,
                title: title,
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                // ici on peut changer l'icon pour personnaliser les vues en fonction des filtres
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker); // add marker to array

            //lorsque l'on clique, on peut ouvrir un pop-up et y injecter des informations
            google.maps.event.addListener(marker, 'click', function () {
                // close window if not undefined
                if (infoWindow !== void 0) {
                    infoWindow.close();
                }
                // create new window
                var infoWindowOptions = {
                    content: content
                };
                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                infoWindow.open(map, marker);
            });
        }



        // show the map and place some markers
        initMap();
        //calcRoute();

/*
        //transformer cette partie en fonction CreateMarkers(); avec un variable temporaire
       function CreateMarkers(coord, title, content) {

            setMarker(map, new google.maps.Latlng(coord), 'title','content');

        }
        setMarker(map, new google.maps.LatLng(51.508515, -0.125487), 'London', 'Just some content');
        setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
        //setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris',  someFilms.data_name );*/
    };

    //renvoi de la map et injection dans le html
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
}]);


