app.factory('filmsdata', ['$http', function($http) { 
  return $http.get('js/services/filmsdata_test.json') 
            .success(function(data) { 
              console.log("ok");
              return data; 
              
            }) 
            .error(function(err) { 
            	console.log("pas ok");
              return err; 
        
            }); 
}]);