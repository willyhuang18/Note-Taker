//using express package
const express = require('express');

//express server
const app = express();

//create PORT
const PORT = process.env.PORT || 3001

// Middleware for parsing application/json and urlencoded data
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//using the static from 'public'
app.use(express.static('public'));

//adding listener for the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} `)
);