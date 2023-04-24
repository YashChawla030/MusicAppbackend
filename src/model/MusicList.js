var mongoose = require("mongoose");

var MusicList =mongoose.Schema({
    name:{
        type: String,
        require: [true, "Please enter first name"]
    },
    artist: {
        type: String,
        require: [true, "Please enter artist name"]
    },
    year: {
        type: Date,
        default: Date.now
    },
    musicLink: {
        type: String,
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("MusicList", MusicList);