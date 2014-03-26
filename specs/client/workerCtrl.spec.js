describe('worker controller', function() {

  beforeEach(module('bookingApp'));

  var http, ctrl, scope;

  var worker1 = { displayName: 'Lasantha', designation: 'BA' };
  var worker2 = { displayName: 'Sankalpa', designation: 'SSE' };

  beforeEach(inject(function($rootScope, $controller, $httpBackend) {
    http = $httpBackend;
    scope = $rootScope.$new();

    http.expectGET('/api/workers')
      .respond([worker1, worker2])

    ctrl = $controller('WorkerCtrl', { $scope: scope});
    http.flush();
  }));

  it('loads workers at start', function() {
    expect(scope.workers).to.contain(worker1);
  });

});