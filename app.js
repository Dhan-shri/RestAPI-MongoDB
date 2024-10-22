const express = require('express');

const app = express();

const dbConnect = require('./db/dbConnect');
//import users first
const users = require('./db/userModel');

dbConnect();


// create New users

const newUser = new users({
    name: 'Dhanshri',
    email: "dhanshri2@gmail.com",
    password: "123",
});

newUser.save()
    .then((result) => {
        console.log(result + 'User inserrted successfully');
    })
    .catch((error) => {
        console.log(error);
    });


    // to find the user

    // users.find({ email: 'dhanshri@gmail.com'})
    // .then((result) => {
    //     console.log("Userr found: ", result);
    // })
    // .catch((error) => {
    //     console.log("Error finding users", error);
    // });



    // to find all the users
    users.find()
    .then((result) => {
        console.log("Userr found: ", result);
    })
    .catch((error) => {
        console.log("Error finding users", error);
    });


module.exports = app;