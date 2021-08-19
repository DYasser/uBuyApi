'use strict';

const express = require('express'),
    app = express(),
    bodyParse = require('body-parser'),
    cors = require("cors"),
    Router = require("./routes");
require('./config/db-config')

//Testing the connection to the server
connection.query('SELECT 1', (err, result) => {
    console.log({ error: err, ok: result })
    if (err) {
        console.log(err)
    }
})

app.use(cors());

//parse app/json and form-urlencoded
app.use(bodyParse.json());

app.use(bodyParse.urlencoded({
    extended: true
}))

//api routes
app.use("/api", cors(), Router);

app.listen(process.eventNames.PORT || 3000, () => console.log("Server is UP"));