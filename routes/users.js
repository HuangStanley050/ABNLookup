var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:api', function(req, res, next) {
  //res.send('respond with a resource');
  console.log(parseInt(req.params.api) + 2);
  /*res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);*/
});


module.exports = router;
