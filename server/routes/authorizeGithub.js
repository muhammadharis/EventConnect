const express = require('express');
const router = express.Router();
var request = require('request');
var mongoose = require('mongoose');
var User = require("../../database/schema");

mongoose.connect('mongodb://muhammad:helloworld123@ds131932.mlab.com:31932/eventconnect');
mongoose.Promise = global.Promise;

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
                request(
                    {
                      headers:{"Authorization": "token "+token,
                               "User-Agent":'abc'},
                      url:'https://api.github.com/user'
                    },        
                      function (error, response, body) {
                        //console.log(response);
                        if (!error && response.statusCode == 200) {
                            console.log(JSON.parse(body));
                            /*var info = JSON.parse(body);
                            var data = {
                                'name':'john',
                                'username': 'johnny',
                                'email':'johnathan',
                                'pictureURL':'test'
                            }
                            User.create(data).then(function(user){
                                console.log('blessed');
                            });*/
                        }
                        else if(error){
                          console.log(JSON.parse(error));
                        }
                    });
                console.log(token);
                res.redirect('http://localhost:4200/signup?type=github&token='+token);
                res.end();
            }
        }
      );

});

module.exports = router;