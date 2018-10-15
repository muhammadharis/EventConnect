const express = require('express');
const router = express.Router();
const User = require("../../database/schema");
const Chat = require("../../database/chatSchema");
const request = require('request');


//Gets the usernames of chats that the user hasn't seen yet
router.get('/getUnseenChatNames', function(req,res){
  var username = req.query.username;
  //Gets only distinct vavlues of the "fromUsername", since there are many records with the same fromUsername
  Chat.find({toUsername: username, seen: false}).distinct('fromUsername').then(function(chats){
    console.log(chats);
    res.status(200).send(chats);
    res.end();
  }).catch(function(err){
    console.log(err);
    res.status(200).send([]); //still send the empty response
    res.end();
  });
});

//Marks all chats in a room as seen for a specific person
router.post('/markAllAsSeen', function(req,res){
  console.log("marking as seen");
  var roomName = req.query.roomName;
  var targetName = req.query.targetName;
  console.log(roomName);
  console.log(targetName);
  Chat.updateMany({roomName: roomName, toUsername: targetName}, {seen: true}).then(function(chats){
    console.log(chats);
    res.status(200).send({message: "Done"});
    res.end();
  }).catch(function(err){
    console.log(err);
    res.status(500).send({message: "Error"});
    res.end();
  });
});

//Returns all chats between two users in a database
router.get('/getAllChats', function(req,res){
  var roomName = req.query.roomName;
  Chat.find({roomName: roomName}, '-_id -__v').then(function(chats){
    console.log(chats);
    res.status(200).send(chats);
    res.end();
  }).catch(function(err){
    console.log(err);
    res.status(500).send({message: "Error"});
    res.end();
  });
});
//This handles the signup form from the signup page
router.post('/addLocationAndCareer', function(req,res){
  var body = req.body;
  //Updates the database to add the career, linkedinProfile, latitude, and longitude
  User.findByIdAndUpdate(req.user.id, {career: body.career, linkedinProfileName: body.linkedinProfileName, loc: {type: "Point", coordinates: [body.long, body.lat]}}, {new: true}).then(function(user){
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


router.get('/getUsersNearby', function(req,res){
  //coordinates are in the form [long, lat] in mongodb
  //This query gets all the users within 3 km
  User.aggregate(
    [
        { "$geoNear": {
            "near": {
                "type": "Point",
                "coordinates": [req.user.loc.coordinates[0], req.user.loc.coordinates[1]]
            },
            "distanceField": "distance",
            "spherical": true,
            "maxDistance": 3000
        }}
    ],
      function(err,results) {
        console.log(results);
        //If successful, return the results
        if(err){
          res.status(500).send({message: "Error"});
          res.end();
        }
        res.status(200).send(results);
        res.end();
      }
    )
  
});

router.get('/getMyUserName', function(req,res){
  res.send(req.user);
  res.end;
});
//Fetch public user
router.get('/fetchPublicUser', function(req,res){
  var username = req.query.username;
  const options = {  
    url: "https://api.github.com/users/"+username,
    method: 'GET',
    headers: {
        'User-Agent': 'EventConnect',
    }
  }

  request(options, function(error, response, body){
    if(error){
      res.status(500).send("{message:Error}");
    }
    else{
      console.log(body);
      res.status(200).send(body);
    }
    res.end();
  });
});

router.get('/getUserRepos', function(req,res){
  var username = req.query.username;
  const options = {  
    url: "https://api.github.com/users/"+username+"/repos",
    method: 'GET',
    headers: {
        'User-Agent': 'EventConnect',
    }
  }

  request(options, function(error, response, body){
    if(error){
      res.status(500).send("{message:Error}");
    }
    else{
      console.log(body);
      res.status(200).send(body);
    }
    res.end();
  });
});
//Follow user
router.post('/followUser', function(req,res){
  //Gets the username from the parameters
  var username = req.query.username;

  //Makes a PUT request to Github API to follow
  const options = {  
    url: "https://api.github.com/user/following/"+username,
    method: 'PUT',
    headers: {
        'User-Agent': 'EventConnect',
        'Authorization': 'token '+req.user.access_token
    }
  }

  request(options, function(error, response, body){
    if(error){
      res.status(500).send("Error");
    }
    else{
      res.status(200).send("Success");
    }
    res.end();
  });

});

//Unfollow user
router.post('/unfollowUser', function(req,res){
  //Gets the username from the parameters
  var username = req.query.username;

  //Makes a DELETE request to Github API to follow
  const options = {  
    url: "https://api.github.com/user/following/"+username,
    method: 'DELETE',
    headers: {
        'User-Agent': 'EventConnect',
        'Authorization': 'token '+req.user.access_token
    }
  }

  request(options, function(error, response, body){
    if(error){
      res.status(500).send("Error");
    }
    else{
      res.status(200).send("Success");
    }
    res.end();
  });

});


module.exports = router;