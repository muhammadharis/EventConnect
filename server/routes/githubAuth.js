const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', function(req,res){
  res.send('backend');
  res.end();
});
// For the authentication with github

router.get('/github', passport.authenticate('github', {scope: ['user']}));

//Handling the redirect to the redirect URI

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    if(req.user.isNew){
      console.log('new user, redirect to signup!');
      res.redirect('/signup');
    }
    else{
      console.log('redirecting to signup');
      res.redirect('/selection');
    }
    
    //res.send(req.user);
    
    //res.redirect('/');
  });

  router.get('/logout',  function(req, res) {
    console.log('logging out');
    req.logout();
    res.redirect('/');
    //res.send(req.user);
    
    //res.redirect('/');
  });


module.exports = router;