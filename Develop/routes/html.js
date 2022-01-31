//using express router
const router = require('express').Router();
//need the path package
const path = require('path');

//get request 
router.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname,'../public/notes.html'));
})

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
})


//The * is  reference ALL paths 
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;