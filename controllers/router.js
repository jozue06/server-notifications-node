// Map routes to controller functions
module.exports = function(router) {
  router.post('/api/ivertinimas', function(req, res, next) {
    console.log('inthe router -->', req.body);
    res.send(req.body);
    next();
    // throw new Error('its me.');
  });
};
