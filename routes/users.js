var express = require('express');
var router = express.Router();
var axios = require("axios");

/* GET users listing. */
router.get('/:api', function(req, res, next) {
  //res.send('respond with a resource');
  var abn = parseInt(req.params.api);
  var URL = "https://abr.business.gov.au/json/AbnDetails.aspx?abn=" + abn + "&guid=b0c80e09-8d53-475e-819d-c0bce406385a";

  axios.get(URL)
    .then(function(response) {
      // handle success

      console.log(response.data);

    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })

  //console.log(parseInt(req.params.api));

  /*res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);*/
});


module.exports = router;
