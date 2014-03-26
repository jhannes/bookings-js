var port = process.env.PORT || 3000;
var url = process.env.DATABASE_URL || 
    'postgres://booking:secret@localhost/booking_dev';

var express = require('express');
var app = express();

var Sequelize = require('sequelize');
var sequelize = new Sequelize(url);

app.use(express.static(__dirname + '/../public'));
app.use(express.json());

var service = require('./service');
service(app, '/api/workers', require('./workerService')(sequelize));

sequelize.sync().success(function() {
  app.listen(port);
  console.log("started server at port", port);
});