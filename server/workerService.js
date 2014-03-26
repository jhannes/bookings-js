var Sequelize = require('sequelize');
var _ = require('underscore');

module.exports = function(sequelize) {
  var Worker = sequelize.define('Worker', {
    displayName: Sequelize.STRING,
    designation: Sequelize.STRING
  });

  return {
    list: function(req, res) {
      Worker.findAll().success(function(data) {
        workers = _(data).collect(function(worker) {
          return {
            displayName: worker.dataValues.displayName,
            designation: worker.dataValues.designation
          };
        });
        res.send(workers);
      });
    },
    create: function(req, res) {
      Worker.create(req.body).success(function() {
        res.send(201);
      });
    }
  };
};
