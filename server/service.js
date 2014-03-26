module.exports = function(app, path, service) {
  app.get(path, service.list);
  app.post(path, service.create);
};
