const path = require("path");

const express = require("express");
const session = require('express-session');
const bodyParser = require("body-parser");

const mongoose = require('mongoose');

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const mainRoute = require('./routes/main');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: "kek",
    resave: false,
    saveUninitialized: true
}));

app.use(mainRoute);
app.use(errorController.get404error);

mongoose.connect('mongodb+srv://soullaft:dP6Xl0TkZyBTFsz6@testclasster-zotym.mongodb.net/beerhunters?retryWrites=true').then(result => {
    app.listen(3000);
}).catch(err => console.log(err));