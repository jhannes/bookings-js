var app = angular.module('bookingApp', []);

app.controller('WorkerCtrl', function($scope, $http) {
  $http.get('/api/workers').success(function(data) {
    $scope.workers = data;
  });
});
