app.service('filmsDataService', ['$http', function($http){
    var filmsPromise;
    this.getFilms = function(){
        if(!filmsPromise){
            filmsPromise = $http.get('js/data/films.json');
        }
        return filmsPromise;
    };
}]);