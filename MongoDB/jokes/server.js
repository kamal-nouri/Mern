const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongoose.config")
require ("./routes/user.routes")(app);

app.listen( port, () => console.log(`kamal: ${port}`) );