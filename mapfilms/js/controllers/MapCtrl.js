
//Angular App Module and Controller

app.controller('MapCtrl',['$scope', 'filmsDataService', function($scope, filmsDataService){
    filmsDataService.getFilms().then(function(data){
        for (i = 0; i < data.data.length; i++){
            if(data.data[i].lat !== 0) { createMarker(data.data[i]) };
        }
        $scope.movies = data.data;
    })

    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(48.8566140,2.3522219),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function(info){
      var marker = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(info.lat, info.lng),
          title: info.titre
      });
/* TEST POUR RECUPERER DU CONTENU AVEC API */

       $scope.information = [];
       $http.get('http://www.omdbapi.com/?t='+info.titre+'&y=&plot=full&r=json')
            .success(function(data) {
                 $scope.information = data;
            })
            .error(function(data,status,error,config){
                $scope.information = [{heading:"Error",description:"Could not load json data"}];
            });


/*FIN */
    marker.content = '<div class="infoWindowContent">'
+ information.real + information.Year + information.Genre+ '</div>';

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