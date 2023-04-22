var express = require('express');
const Users = require('../../model/Users');
const rest = express.Router();


rest.get('/users',async (req, res) => {
    const data = await Users.find();
    res.status(200).json(data);
})


rest.get('/users/{name}')


rest.post('/addUsers', async (req, res) => {
    console.log("Value of req is ", req.body)
    if(!req.body.firstName) {
        res.status(400);
        console.log("please add some data");
    }
    let data = null;
    try {
        console.log(`here is the first name ${req.body.lastName}`)
        data = await Users.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailId: req.body.emailId,
            age: req.body.age,
            phoneNumber: req.body.phoneNumber,
        });
    }catch (e) {
        data = e.body;
        console.log(`please re-enter data ${e}`);
        res.status(400).json({error: data})
    }
    res.status(200).json({"message": "All Good"});
})

module.exports = rest;