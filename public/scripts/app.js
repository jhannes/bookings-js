var app = angular.module('bookingApp', []);

app.controller('WorkerCtrl', function($scope, $http) {
  var fetch = function() {
    $http.get('/api/workers').success(function(data) {
      $scope.workers = data;
    });
  };
  var createNewWorker = function() {
    $scope.newWorker = { displayName: '', designation: '' };    
  };

  $scope.create = function() {
    $http.post('/api/workers', $scope.newWorker).success(function() {
      fetch();
      createNewWorker();
    }).error(function() {
      toastr.error("Failed so save worker");
    });
  };

  fetch();
  createNewWorker();
});
