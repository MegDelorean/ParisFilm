app.factory('forecast', ['$http', function($http) { 
  return $http.get('http://data.loire-atlantique.fr/api/publication/22440002800011_CG44_CLT_03001/cinema_STBL/content/?format=json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);