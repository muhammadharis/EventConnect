const express = require('express');
const router = express.Router();
var request = require('request');

/* GET api listing. */
router.get('/', (req, res) => {
    var code = req.query.code;
    console.log(req.query.code);  
    request.post({
    headers: {'content-type' : 'application/x-www-form-urlencoded'},
    url:     'https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code='+code+'&redirect_uri=http://localhost:9090/authorize&client_id=86wrv2s8487eej&client_secret=JR3MWJVoJXT4TWJj',
    }, function(error, response, body){
    console.log(JSON.parse(body).access_token);
    res.end();
    });
    
});

module.exports = router;