//install some package needed
const util =require('util');
const fs = require('fs');
//provide a consistent format for any unique ID we use for our data.
const {v4:uuidv4}=require('uuid');