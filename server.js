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
const Chat = require('./database/chatSchema');


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
  
  socket.on('joinRooms', function(msg){
    socket.join([msg.self, msg.name]); //joins the self room, and the chat room
  })
  //Receives a message from the client chatbox component, packages it up with the github username, and sends it to all clients
  socket.on('message-to-server', function(msg){
    
    var roomName;
    //Room name is the concatenation of both usernames in lexicographical order
    if(msg.toUsername<msg.fromUsername){
      roomName = msg.toUsername+":"+msg.fromUsername;
    }
    else{
      roomName = msg.fromUsername+":"+msg.toUsername;
    }
    //We message to everyone in the room (which is only two people anyways);
    io.to(roomName).emit('message-to-clients', msg);

    //We also save the chat to the database
    var chat = new Chat({
      roomName: roomName,
      fromUsername: msg.fromUsername,
      toUsername: msg.toUsername,
      fromAvatar: msg.fromAvatar,
      msg: msg.msg
    });
    chat.save().catch((err)=>{console.log('cannot save chat');});
  });

  //deletes a user from another user's notification list, re-emits it to chat notification component
  socket.on('deleteFromNotificationList', function(user){
    socket.emit('deleteFromNotificationList', user);
  });

  socket.on('joinMyOwnRoom', function(user){
    socket.join(user.name);
  });
  //adds a user to another user's notification list, re-emits it to chat notification component
  socket.on('addToNotificationList', function(user){
    console.log("REQUEST TO ADD");
    console.log(user.toUsername);
    socket.to(user.toUsername).emit('addToNotificationList',user);
  })
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