const express = require('express');

const app = express();

const dbConnect = require('./db/dbConnect');
//import users first
const users = require('./db/userModel');

dbConnect();


// create New users

const newUser = new users({
    name: 'Dhanshri',
    email: "dhanshri1@gmail.com",
    password: "123",
});

newUser.save()
    .then((result) => {
        console.log(result + 'User inserrted successfully');
    })
    .catch((error) => {
        console.log(error);
    });


module.exports = app;