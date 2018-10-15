var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var chats = new Schema({
    seen:{
        type: Boolean,
        required: true,
        default: false
    },
    roomName:{
        type: String,
        required: true
    },
    fromUsername:{
        type: String,
        required: true
    },
    toUsername:{
      type: String,
      required: true
    },
    fromAvatar:{
      type: String,
      required: true,
    },
    msg:{
        type: String,
        required: true
    }
    
});

var chat = mongoose.model("chat",chats);

module.exports = chat;