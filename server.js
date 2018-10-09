// Get dependencies
const express = require('express');
const app = express();
const passport = require('passport');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(http);
const cookieSession = require('cookie-session');
const passportSetup = require('./passportConfig/passport-setup');
const keys = require('./keys');


// Get our API routes
const github = require('./server/routes/githubAuth');
const api = require('./server/routes/api');

mongoose.connect('mongodb://muhammad:helloworld123@ds131932.mlab.com:31932/eventconnect', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

//Cookie middleware + expiry time (24 hours)
app.use(cookieSession({
  maxAge: 24*3600000,
  keys: [keys.cookie.key]
}));

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());


//Start up socket
io.on("connection", (socket) => {
  console.log("Socket is connected...")
  //Receives a message from the client chatbox component, packages it up with the github username, and sends it to all clients
  socket.on('joinRoom', function(msg){
    socket.join(msg.name);
  })
  socket.on('message-to-server', function(msg){
    
    io.to(msg.toUsername+":"+msg.fromUsername).emit('message-to-clients', msg);

    //we also want to send the message to ourself, so it shows up in the chat
  });
})

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

/**
 * Listen on provided port, on all network interfaces.
 */
http.listen(port, () => console.log(`API running on localhost:${port}`));