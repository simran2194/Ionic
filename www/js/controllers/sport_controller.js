(function () {

  var app = angular.module('sportController', []);
  app.controller('SportController',
    function ($scope, $http) {

      $scope.sports = [];
      var url = 'http://www.lvh.me:8000/sports';
      $http.get(url)
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
