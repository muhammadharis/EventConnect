var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var users = new Schema({
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
    }
});
var user = mongoose.model("user",users);

module.exports = user;