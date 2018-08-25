const express = require('express');
const router = express.Router();
var request = require('request');

/* GET api listing. */
router.get('/', (req, res) => {
    var code = req.query.code;
    console.log(req.query.code);  
    

    request.post({
        headers:{"Accept": "application/json"},
        url:'https://api.instagram.com/oauth/access_token?grant_type=authorization_code&redirect_uri=http://localhost:9090/authorizeInstagram&client_id=1ac142c4f0e24b649478aebc3193b23c&client_secret=a30f952821064082a6eb6828fd509682&code='+code
      },
          function (error, response, body) {
           console.log(body);
        }
      );

});

module.exports = router;