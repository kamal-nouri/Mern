const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.listen( port, () => console.log(`kamal: ${port}`) );