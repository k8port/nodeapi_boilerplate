// server.js
// specify dependencies
const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const bodyParser    = require('body-parser');

// init as instance of express framework
const app           = express();
// listen for HTTP requests on 8000
const port          = 8000;

app.listen(port, () => {
  console.log('We are live on port ', port);
});


// run npm run dev 
