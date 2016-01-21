/*
app.service('NewsService', ['$http', function($http){
    var newsPromise;

    this.getNews = function(){
        if(!newsPromise){
            newsPromise = $http.get('news.json');
        }
        return newsPromise;
    };
}]);

app.controller('NewsController', ['$scope','NewsService', function($scope, NewsService){
    NewsService.getNews().then(function(data){
        $scope.news = data.data;
    })
}]);
*/


//Angular App Module and Controller
var app = angular.module('mapsApp', []);

app.controller('MapCtrl',['$scope', '$http', function($scope, $http){
        $scope.movies = [];
        $http.get('js/films.json')
            .success(function(data) {
              for (i = 0; i < data.length; i++){
                if(data[i].lat !== 0) { createMarker(data[i]) };
              }
              $scope.movies = data;
            })
            .error(function(data,status,error,config){
                $scope.movies = [{heading:"Error",description:"Could not load json data"}];
            });


    var mapOptions = {
        zoom: 12,
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
/* TEST POUR RECUPERER DU CONTENU AVEC API 

       $scope.information = [];
       $http.get('https://www.omdbapi.com/?t='+info.titre+'&y=&plot=full&r=json')
            .success(function(data) {
                 $scope.information = data;
                  marker.content = '<div class="infoWindowContent">'
+ data.Director + data.Year + data.Genre+ '</div>';
            })
            .error(function(data,status,error,config){
                $scope.information = [{heading:"Error",description:"Could not load json data"}];
            });*/
          var data = [];
          
           data = jsonSyncLoad( "http://www.omdbapi.com/?t="+info.titre+"&y=&plot=full&r=json" );

           if(data.Director == undefined ) {
            console.log(info.titre);
             marker.content = '<div class="infoWindowContent"><p>'+ info.real+'</p></div>';

           }
           else{
             marker.content = '<div class="infoWindowContent"><p>'+ data.Director+'</p> <p>' + data.Year +'</p><p>'+ data.Genre+ '</p><p>'+data.Actors+'</p></div>'; 
           }
/*FIN */
   

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    }

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

}]);



