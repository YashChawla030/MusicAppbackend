var express = require('express');
const MusicList = require('../../model/MusicList');
const Users = require("../../model/Users");
const path = require('path');
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
        let currentModulePath = __dirname;
        currentModulePath = path.resolve(currentModulePath, '../..')
        currentModulePath = path.join(currentModulePath,'music')
        data = await MusicList.create({
            name: req.body.name,
            artist: req.body.artist,
            year: req.body.year,
            musicLink: path.join(currentModulePath,req.body.name+".mp3")
        });
    }catch (e) {
        data = e.body;
        console.log(`please re-enter data ${e}`);
        res.status(400).json({error: data})
    }
    res.status(200).json({"message": "Music Successfully added in database"});
})

module.exports = musicRestController;