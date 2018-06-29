// Map routes to controller functions
module.exports = function(router) {
  router.get('/api/ivertinimas', function(req, res) {
    // console.log(req.body);
    throw new Error('its me.');
  });
};
