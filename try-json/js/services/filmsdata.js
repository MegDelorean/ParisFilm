app.factory('filmsdata', ['$http', function($http) { 
  return $http.get('js/services/filmsdata_test.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);