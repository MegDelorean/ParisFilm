//Data
var films = [
              {
                  name : 'Le fabuleux destin d Amelie Poulain',
                  desc : 'Synopsis',
				  real: 'real',
				  acteurs: 'Audrey Tautou',
                  lat : 48.8761254,
                  long : 2.3412238
              },
              {
                  name : 'Minuit a Paris',
                  desc : 'Synopsis',
				  real : 'real',
				  acteurs: 'acteurs',
                  lat : 48.8517896,
                  long : 2.3496352
              },
              {
                  name : 'Un monstre a Paris',
                  desc : 'Synopsis',
				  real : 'real',
				  acteurs: 'acteurs',
                  lat : 48.8498693,
                  long : 2.3912631
              },
              {
                  name : 'Hugo Cabret',
                  desc : 'Synopsis',
				  real : 'real',
				  acteurs: 'acteurs',
                  lat : 48.8372728,
                  long : 2.3353873
              }
          ];

          //Angular App Module and Controller
          var sampleApp = angular.module('mapsApp', []);
          sampleApp.controller('MapCtrl', function ($scope) {

              var mapOptions = {
                  zoom: 12,
                  center: new google.maps.LatLng(48.8566140,2.3522219),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.name
                  });
                  marker.content = '<div class="infoWindowContent">' 
				  + info.desc + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
              for (i = 0; i < films.length; i++){
                  createMarker(films[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });