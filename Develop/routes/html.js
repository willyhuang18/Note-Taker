//using express router
const router = require('express').Router();
//need the path package
const path = require('path');

//get request 
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname,'../public/notes.html'));
})

module.exports = router;