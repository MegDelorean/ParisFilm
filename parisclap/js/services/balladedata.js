app.service('balladeDataService', ['$http', function($http){
    var filmsPromise;
    this.getFilms = function(){
        if(!filmsPromise){
            filmsPromise = $http.get('js/data/NouvelleVague2.json');
        }
        return filmsPromise;
    };
}]);

app.service('balladeDataService2', ['$http', function($http){
    var filmsPromise;
    this.getFilms = function(){
        if(!filmsPromise){
            filmsPromise = $http.get('js/data/ComedieFrancaise.json');
        }
        return filmsPromise;
    };
}]);