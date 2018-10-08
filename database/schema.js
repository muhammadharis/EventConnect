var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var users = new Schema({
    githubId:{
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
    loc:{
        lat:{
            type: Number,
            required: false
        },
        lng:{
            type: Number,
            required: false
        },
        required: false
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
var user = mongoose.model("user",users);

module.exports = user;