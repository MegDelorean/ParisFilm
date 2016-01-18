
app.directive('myMap', function() {
    // directive link function
    var link = function(scope, element, attrs) {
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
                
            }
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
        

        //transformer cette partie en fonction CreateMarkers(); avec un variable temporaire
        setMarker(map, new google.maps.LatLng(51.508515, -0.125487), 'London', 'Just some content');
        setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
        setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris', '{{ someFilms.data_name }}');
    };
    
    //renvoi de la map et injection dans le html 
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
});


