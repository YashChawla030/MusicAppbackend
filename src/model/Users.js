var mongoose = require("mongoose");

var UserSchema =mongoose.Schema({
    name:{
        type: String,
        require: [true, "Please enter first name"]
    },
    emailId: {
        type: String,
        require: [true, "Please enter your email"]
    },
    password : {
        type: String,
        require: [true, "Please enter password for security"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


module.exports=mongoose.model("Users",UserSchema);