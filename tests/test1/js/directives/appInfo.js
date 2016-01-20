app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      film: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
});
