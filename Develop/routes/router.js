//using express router
const router = require('express').Router();
//import data.js
const data = require('../db/data');

//get request
router.get('/notes', (req, res)=>{
  console.info(`${req.method} request received for feedback`);
    data
    .getNote()
    .then(notes => res.json(notes))
    .catch(err=> res.status(404).json(err))
})

//post request
router.post('/notes', (req, res)=>{
  console.info(`${req.method} request received to submit feedback`);
  data
  .addNote()
  .then(notes => res.json(notes))
  .catch(err=> res.status(404).json(err))
})

module.exports = router;