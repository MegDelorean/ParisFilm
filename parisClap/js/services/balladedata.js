app.service('balladeDataService', ['$http', function($http){
    var filmsPromise;
    this.getFilms = function(){
        if(!filmsPromise){
            filmsPromise = $http.get('js/data/Ballade.json');
        }
        return filmsPromise;
    };
}]);