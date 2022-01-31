//using express router
const router = require('express').Router();
//import data.js
const data = require('../db/data');

//get request
router.get('/notes', (req, res)=>{
    data
    .read()
    .then(notes => res.json(notes))
    .catch(err=> res.status(404).json(err))
})