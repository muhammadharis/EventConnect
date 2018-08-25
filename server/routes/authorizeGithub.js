const express = require('express');
const router = express.Router();
var request = require('request');

/* GET api listing. */
router.get('/', (req, res) => {
    var code = req.query.code;
    console.log(req.query.code);  
    

    request.post({
        headers:{"Accept": "application/json"},
        url:'https://github.com/login/oauth/access_token?client_id=519813e63570d699ea25&client_secret=d4c62256b7dae895dbcaca4700b8ca244f29193f&code='+code
      },
          function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var token= JSON.parse(body).access_token;
                console.log(token);
                res.redirect('http://localhost:4200/signup?type=github&token='+token);
                res.end();
            }
        }
      );

});

module.exports = router;