const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../database/schema');
const keys = require('../keys');

passport.serializeUser(function(user, done){
  console.log('serializing user');
  done(null, user.id); //serializes the mongoDB id into a packet for a cookie
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
    clientID: keys.github.clientId,
    clientSecret: keys.github.clientSecret,
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
          console.log('created '+ user);
          done(null, user);
        });
      }
      else{
        User.findOneAndUpdate({ githubId: profile.id }, data, {$upsert: true}).then(function(user){
          done(null, user);
        }).catch(function(err){
          done(error, user);
        });

      }      
    });
  }
));