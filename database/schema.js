var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var users = new Schema({
    type:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    pictureURL:{
        type: String,
        required: true
    },
    position:{
        type: String,
        require: false
    },
    latitude:{
        type: Number,
        required: true
    },
    longitude:{
        type: Number,
        required: true
    },
    linkedBy:{
        type: [],
        required: false
    }
});
var user = mongoose.model("user",users);

module.exports = user;