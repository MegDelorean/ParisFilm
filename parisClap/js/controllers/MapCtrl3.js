routeAppControllers.controller('MapCtrl3', ['$scope', 'filmsDataService', '$window', '$timeout', '$http', function($scope, filmsDataService, $window, $timeout, $http){

        filmsDataService.getFilms().then(function(data){
            //console.log(data);
            var markers = [];
            for (var i = 0; i < data.data.length; i++) {
                $timeout(function(data){
                    if(data.data[i].lat == "0") {
                        gpsdata = [];

                        gpsdata= jsonSyncLoad("http://maps.googleapis.com/maps/api/geocode/json?address="+data.data[i].adr);
                        if (gpsdata.results[0].geometry.location.lat != undefined && gpsdata.results[0].geometry.location.lng!= undefined) {
                            data.data[i].lat = gpsdata.results[0].geometry.location.lat;
                            data.data[i].lng = gpsdata.results[0].geometry.location.lng;

                        };
                        //console.log(gpsdata);
                    }

                    pushData(data.data[i]);
                }, 200);
            }
            //$http.post("./jsonencoder.php", data.data);

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
            info.imdbID = data.imdbID;
        }

}]);

