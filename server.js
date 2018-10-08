// Get dependencies
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const passportSetup = require('./passportConfig/passport-setup');
const cookieSession = require('cookie-session');
const keys = require('./keys');


// Get our API routes
const github = require('./server/routes/githubAuth');
const api = require('./server/routes/api');

mongoose.connect('mongodb://muhammad:helloworld123@ds131932.mlab.com:31932/eventconnect', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const app = express();
//Cookie middleware + expiry time (24 hours)
app.use(cookieSession({
  maxAge: 24*3600000,
  keys: [keys.cookie.key]
}));

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use('/', express.static(path.join(__dirname, 'dist/hackthesix')));
app.use('/auth', github);
app.use('/api', api);

// Set our api routes
//app.use('/', backendHome)


// Catch all other routes and return the index file so ANGULAR deals with the routing
app.get('*', (req, res) => {
  console.log(req.originalUrl)
  //If the user isn't authenticated, just return them back to the home page
  if(!req.user){
    res.redirect('/');
  }
  
  res.sendFile(path.join(__dirname, 'dist/hackthesix/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4200';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));