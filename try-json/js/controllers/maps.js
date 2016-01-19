      
          app.controller('MapCtrl', ['$scope','filmsdata', function($scope, filmsdata) {

            filmsdata.success(function(data) {
              $scope.myfilms = data;

              console.log("app.controller en route");

            });

            $scope.myMapControl = {};

              var mapOptions = {
                  zoom: 12,
                  center: new google.maps.LatLng(48.8566140,2.3522219),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

                           console.log("je suis toujours là lol");
              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.title
                  });
                  marker.content = '<div class="infoWindowContent">' 
				  + info.desc + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
              for (i = 0; i < myfilms.length; i++){
                  createMarker(myfilms[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

           }]);
