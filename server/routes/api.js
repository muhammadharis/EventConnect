const express = require('express');
const router = express.Router();
const User = require("../../database/schema");

//This handles the signup form from the signup page
router.post('/addLocationAndCareer', function(req,res){
  var body = req.body;
  //Updates the database to add the career, linkedinProfile, latitude, and longitude
  User.findByIdAndUpdate(req.user.id, {career: body.career, linkedinProfileName: body.linkedinProfileName, loc: {lat:body.lat, lng: body.long}}, {new: true}).then(function(user){
    console.log(user);
    res.status(200).send('Updated');
    res.end();
  }).catch(function(error){
    res.status(500).send('Error');
    res.end();
  });
  //res.send('done');
  //res.end();
});

module.exports = router;