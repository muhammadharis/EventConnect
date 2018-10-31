const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../database/schema');

passport.serializeUser(function(user, done){
  console.log('serializing user');
  done(null, user._id); //serializes the mongoDB id into a packet for a cookie
})

passport.deserializeUser(function(id, done){
  console.log('deserializing user');
  User.findById(id).then(function(user){
    if(user!=null){
      done(null, user);
    }
  })
})

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {

    //If the user haven't specified a Github profile name, we'll just use their username
    if(profile.displayName == null || profile.displayName == undefined){
      profile.displayName = profile.username;
    }
    var data = {
      githubId: profile.id,
      name: profile.displayName,
      username: profile.username,
      avatar_url: profile._json.avatar_url,
      github_followers: profile._json.followers,
      github_following: profile._json.following,
      url: profile.profileUrl,
      access_token: accessToken
    }
    console.log(data);
    //Check if user already exists
    User.findOne({ githubId: profile.id }, function (err, user) {
      //Create user if it doesn't exist
      if(!user){
        User.create(data, function(err, user){
          var leanObject = user.toObject(); //A JS object that can be edited
          leanObject.isNew = true;
          done(null, leanObject);
        });
      }
      else{
        User.findOneAndUpdate({ githubId: profile.id }, data, {$upsert: true}).then(function(user){
          var leanObject = user.toObject(); //A JS object that can be edited
          done(null, leanObject);
        }).catch(function(err){
          done(error, user);
        });

      }      
    });
  }
));