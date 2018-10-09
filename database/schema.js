var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var users = new Schema({
    githubId:{
        type: String,
        required: true
    },
    access_token:{
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
    avatar_url:{
        type: String,
        required: true
    },
    github_followers:{
        type: Number,
        required: true
    },
    github_following:{
        type: Number,
        required: true
    },
    url:{
        type: String,
        required: true
    },

    /**NOTE** we've defaulted the coordinates to be [0,0]
    ** The user MUST allow location access, or these coordinates will stay [0,0]
    ** This is not good, because they will see nobody in their vicinity
    */
    loc: {
        type: { type: String, enum: "Point", default: "Point" },
        coordinates: {type: [Number],   default: [0,0]}
    },
    career:{
        type: String,
        required: false
    },
    linkedinProfileName:{
        type: String,
        required: false
    }
});

users.index({ "loc": "2dsphere" });

var user = mongoose.model("user",users);

module.exports = user;