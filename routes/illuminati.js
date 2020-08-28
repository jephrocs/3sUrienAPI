const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


router.get('/', (req, res) => {
    res.send('TREMBLE!');
    console.log("someone is here")
});

router.post('/', (req, res)=>{
    console.log(req.body);
})

router.get('/tackle', (req, res) => {
    res.send('TACKLE!');
    console.log("TACKLE HEADBUTT")
});

module.exports = router;
