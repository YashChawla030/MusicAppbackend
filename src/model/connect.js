const mongoose = require("mongoose");

var url = "mongodb://localhost:27017/stressibye";

const connectDB = async () => {
    try {
        // connection creation and creating new database
        mongoose.connect(url).then(()=>{
            console.log("Connection stablished between app and database");
        }).catch((err)=>{
            console.log("there is some issue in connection",err);
        });
    }catch (e) {
        console.log(`There is some error in connecting with database ${e.json}`);
    }
}

module.exports = connectDB;