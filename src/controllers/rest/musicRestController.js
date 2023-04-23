var express = require('express');
const MusicList = require('../../model/MusicList');
const Users = require("../../model/Users");
const musicRestController = express.Router();

musicRestController.get('/allMusic',async (req, res) => {
    console.log("getting get request on allMusic")
    const data = await MusicList.find();
    res.status(200).json(data);
})

musicRestController.post('/addMusic', async (req, res) => {
    if(!req.body.name) {
        res.status(400);
        console.log("please add some data");
    }
    let data = null;
    try {
        console.log(`here is the first name ${req.body.name}`)
        data = await Users.create({
            name: req.body.name,
            artist: req.body.artist,
            year: req.body.year,
        });
    }catch (e) {
        data = e.body;
        console.log(`please re-enter data ${e}`);
        res.status(400).json({error: data})
    }
    res.status(200).json({"message": "Music Successfully added in database"});
})

module.exports = musicRestController;