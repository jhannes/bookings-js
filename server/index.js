var port = process.env.PORT || 3000;

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../public'));
app.use(express.json());

var service = require('./service');
service(app, '/api/workers', require('./workerService'));

app.listen(port);
console.log("started server at port", port);