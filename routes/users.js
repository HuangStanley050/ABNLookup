var express = require('express');
var router = express.Router();
var axios = require("axios");
var jsonp = require("jsonp");
var fetchJsonp = require("fetch-jsonp");
let jsonpAdapter = require('axios-jsonp');
var getJSON = require('get-json');



/* GET users listing. */
router.get('/:api', function(req, res, next) {
  //res.send('respond with a resource');
  var abn = parseInt(req.params.api);
  var URL = "https://abr.business.gov.au/json/AbnDetails.aspx?abn=" + abn + "&callback=mycallback&guid=b0c80e09-8d53-475e-819d-c0bce406385a";

  axios.get(URL)
    .then(response => {
      var test_string = response.data;
      test_string = test_string.slice(11, 318);
      console.log(test_string);
    })
    .catch(err => {
      console.log(err)
    });






});


module.exports = router;
