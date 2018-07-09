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
  var no_white_space = req.params.api.replace(/ /g, '');
  var abn = parseInt(no_white_space);
  var URL = "https://abr.business.gov.au/json/AbnDetails.aspx?abn=" + abn + "&callback=mycallback&guid=b0c80e09-8d53-475e-819d-c0bce406385a";

  axios.get(URL)
    .then(response => {
      var test_string = response.data;
      let ABN = {};
      test_string = test_string.slice(11, test_string.length - 1);
      ABN = JSON.parse(test_string);

      console.log(ABN.EntityName);
      res.send(ABN);
    })
    .catch(err => {
      console.log(err);
    });






});


module.exports = router;
