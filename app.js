"use strict"
const express = require('express');
const app = express();
const port = process.env.port || 4444;
app.set('view engine','ejs');
const index = require("./routes/index");
const owner = require("./routes/owner");
const driver = require("./routes/driver");
const user = require("./routes/user");


app.use('', index);
app.use('', owner);
app.use('', driver);
app.use('', user);


app.listen(8080,()=>{
  console.log('server running  : http://localhost:8080');
});