var express = require('express');
const Users = require('../../model/Users');
const userRestController = express.Router();


userRestController.get('/users',async (req, res) => {
    const data = await Users.find();
    res.status(200).json(data);
})

userRestController.post('/addUsers', async (req, res) => {
    if(!req.body.firstName) {
        res.status(400);
        console.log("please add some data");
    }
    let data = null;
    try {
        console.log(`here is the first name ${req.body.lastName}`)
        data = await Users.create({
            name: req.body.name,
            emailId: req.body.emailId,
            password: req.body.password,
        });
    }catch (e) {
        data = e.body;
        console.log(`please re-enter data ${e}`);
        res.status(400).json({error: data})
    }
    res.status(200).json({"message": "All Good"});
})

userRestController.post('/authenticate', async (req,res) => {
    if(!req.body.username) {
        res.status(400);
        console.log("please send data");
    }
    let data = null;
    try {
        var authenticate = false;
        let username = req.body.username;
        let password = req.body.password;
        let resData = await Users.find();
        console.log("Value of resData is "+resData)
        resData.forEach(data => {
            console.log(`value of res values is ${data.name}`)
            if (data.name === username){
                if (data.password === password){
                    authenticate = true;
                res.status(200).json({"authenticate": true});
                }
            }
        });
        if (!authenticate){
        res.status(200).json({"authenticate": false});
        }
    }catch (e) {
        data = e.body;
        console.log(`please check data ${e}`);
        res.status(400).json({"authenticate": false,error: data})
    }
})

module.exports = userRestController;