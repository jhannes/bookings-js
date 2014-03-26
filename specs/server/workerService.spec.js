var expect = require('expect.js');

describe('worker service', function() {

  var newWorker = { displayName: 'Chamath', designation: 'ATL' };
  var service;

  beforeEach(function() {
    service = require('../../server/workerService.js');
  });

  it('starts out without new worker', function(done) {
      var res = {
        send: function(data) {
          expect(data).not.to.contain(newWorker);
          done();
        }
      };
      service.list({}, res);
  });

  it('retrieves saved workers', function(done) {
    var req = {body: newWorker};
    var res = { 
      send: function() {
        var req = {};
        var res = {
          send: function(data) {
            expect(data).to.contain(newWorker);
            done();
          }
        };
        service.list(req, res);
      }
    };
    service.create(req, res);
  });
});
