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

  it('has a template for a new worker', function() {
    expect(scope.newWorker).to.eql({ displayName: '', designation: '' });
  });

  describe('adding new workers', function() {
    var newWorker = { displayName: 'Chamath', designation: 'ATL' };

    beforeEach(function() {
      http.expectPOST('/api/workers', newWorker).respond(201);
      http.expectGET('/api/workers').respond([newWorker])
      scope.newWorker = newWorker;
    });

    it('saves new workers', function() {
      scope.create();
      http.flush();
    });

    it('refreshes workers on save', function() {
      scope.create();
      http.flush();
      expect(scope.workers).to.contain(newWorker);
    });

    it('clears newWorker on save', function() {
      scope.create();
      http.flush();
      expect(scope.newWorker).to.eql({ displayName: '', designation: '' });
    });
  })

  describe('error during add', function() {
    var newWorker = { displayName: 'Chamath', designation: 'ATL' };

    beforeEach(function() {
      scope.newWorker = newWorker;
    });

    it('keep the old worker', function() {
      http.expectPOST('/api/workers', newWorker).respond(400);
      scope.create();
      http.flush();
      expect(scope.newWorker).to.eql(newWorker);
    });
  })



});