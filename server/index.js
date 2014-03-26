var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../public'));
app.use(express.json());

var workers = [
  { displayName: 'Lasantha', designation: 'BA' },
  { displayName: 'Sankalpa', designation: 'SSE' }
];

app.get('/api/workers', function(req, res) {
  res.send(workers);
});
app.post('/api/workers', function(req, res) {
  workers.push(req.body);
  res.send(201);
});


app.listen(port);
console.log("started server at port", port);