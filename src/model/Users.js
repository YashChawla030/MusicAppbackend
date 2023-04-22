var mongoose = require("mongoose");

var UserSchema =mongoose.Schema({
    firstName:{
        type: String,
        require: [true, "Please enter first name"]
    },
    lastName:String,
    emailId: {
        type: String,
        require: [true, "Please enter your email"]
    },
    age: {
        type: Number,
        require: [true, "Please enter your age"]
    },
    phoneNumber: String,    
    stressLevel: {
        type : Number,
        default : 0
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