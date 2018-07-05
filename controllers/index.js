let express = require('express')
  , router = express.Router();

// GET: /
router.get('/', function(req, res, next) {
  // console.log('in the index controller');
  res.redirect(302, '/notifications/new');
});


module.exports = router;
