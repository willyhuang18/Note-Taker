//install some package needed
const util =require('util');
const fs = require('fs');
//provide a consistent format for any unique ID we use for our data.
const {v4:uuidv4}=require('uuid');

//using promisify() method to takes a function as an input that follows the common Node. js callback style,
const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);


