(function () {

  var app = angular.module('sportController', []);
  app.controller('SportController',
    function ($scope, $http) {

      $scope.sports = [];
      var url = 'http://192.168.0.54:8000/sports';
      var req = {
        method: 'GET',
        url: url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMiwiZXhwIjoxNTIxODc1MjQwLCJpc3MiOiJmcmVlaGl0IiwiYXVkIjoiY2xpZW50In0.kJbPso0eirb-I5A5qw35b_chtqyU_5KNaXu78_nfi0I',
          'Accept': 'application/vnd.freehit.v1'
        }
      };

      $http(req)
        .success(function(data) {
          console.log(data);
          angular.forEach(data.sports, function(value, key) {
            this.push(value.name);
          }, $scope.sports);
        })
        .error(function(data, status) {
          console.error('Repos error', status, data);
        })
    }
  )
})();
