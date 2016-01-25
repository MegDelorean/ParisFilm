routeAppControllers.controller('MapCtrl3', ['$scope', 'filmsDataService', '$window', '$timeout', '$http', function($scope, filmsDataService, $window, $timeout, $http){

        filmsDataService.getFilms().then(function(data){
            console.log(data);
            var markers = [];
            for (var i = 0; i < data.data.length; i++) {
                if(data.data[i].lat !== 0) {pushData(data.data[i])}
            }
            $http.post("./jsonencoder.php", data.data);

        })

        function jsonSyncLoad( pFile ) {
            var mime      =    "application/json"   ;
            var xmlhttp   =   new XMLHttpRequest()  ;

            xmlhttp.open("GET",pFile,false);
            if (xmlhttp.overrideMimeType)
                xmlhttp.overrideMimeType( mime );

            xmlhttp.send();
            return (xmlhttp.status==200) ? JSON.parse( xmlhttp.responseText ) : null ;
        }

        var pushData = function(info){
            var data = jsonSyncLoad( "http://www.omdbapi.com/?t="+info.titre+"&y=&plot=full&r=json");
            info.annee = data.Year;
            info.genre = data.Genre;
            info.acteurs = data.Actors;
            info.poster = data.Poster;
        }
}]);

