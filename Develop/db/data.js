//install some package needed
const util =require('util');
const fs = require('fs');
//provide a consistent format for any unique ID we use for our data.
const uuid = require('../helper/uuid');

//using promisify() method to takes a function as an input that follows the common Node. js callback style,
const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);


//Creating Sava class() to contain the require method
class Save{
    //return the note to the fs.writeFile method
    write(note){return writeNote ('./Develop/db/db.json', JSON.stringify(note))};

    //return the note to the fs.readFile method
    read(){return readNote('./Develop/db/db.json', 'utf8')};

    //need the getNote method for getting the note
    /*by using try and catch method, which is a block of statements to 
    try and specifies a response should an exception be thrown.*/
    getNote(){
        //return to the read()
        return this.read().then( notes => {
            const checkNote;
            try {
                //using concat method to merge two or more arrays. 
                checkNote = [].concat(JSON.parse(notes))
            }catch(err){
                checkNote = [];
            }
            return checkNote;
        })
        
    }

    //create addNote() for adding more note
    addNote(note){
        //const data from db.json as argument 
        const {title, text} = note;
        //give condition to check if there is input
        if(!title || !text){
            console.error('Please fill in the title and text!');
        }
        //make a new variable for the new note with the id 
        const newNote = {title, text, id: uuid()};
    }
}

//make it module for other to use
module.exports = new Save();