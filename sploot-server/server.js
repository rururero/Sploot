// Sploot! Animal Rescue
// Server Entry Point
// Creates and Configures the application and loads the necessary middleware
// Do Not Change the Content of this file.

const express = require("express");
const mongoose = require("mongoose");
const db = require('./src/config/keys').uri;
const port = 3000;


const sploot = express();
// Configures Sploot Application
sploot.use(require('body-parser').urlencoded({extended:true}));

//Mount Routers from Routes Folder 
sploot.use(require('./src/routes/mainRoutes'));

// Connects to Database Connection
mongoose.connect(
  db,
  {useNewUrlParser: true}
)
.then(()=>console.log("Database Connected OK"))
.catch(err=>console.log(err));





// Initialize Server on Port
sploot.listen(port,()=>console.log("Sploot Server Up and Running (c) Sploot! 2019\n"+ Date(Date.now()) ));
