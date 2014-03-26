var workers = [
  { displayName: 'Lasantha', designation: 'BA' },
  { displayName: 'Sankalpa', designation: 'SSE' }
];


module.exports = {
  list: function(req, res) {
    res.send(workers);
  },
  create: function(req, res) {
    workers.push(req.body);
    res.send(201);
  }
};


