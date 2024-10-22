const express = require('express');

const app = express();

const dbConnect = require('./db/dbConnect');
//import users first
const users = require('./db/userModel');

dbConnect();


// create New users

const newUser = new users({
    name: 'Dhanshri',
    email: "dhanshri4@gmail.com",
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



    // to update the user details - updateOne method take two arguments 1. filter 2. update

users.updateOne({email: 'dhanshri@gmail.com'}, {name: 'Dhanshri Sonwane'})
    .then((result) => {
        console.log("User updated successfully", result);
    })
    .catch((error) => {
        console.log("Error updating user", error);
    });



// to delete the user details - deleteOne method take one argument filter

users.deleteOne({email: 'dhanshri3@gmail.com'})
    .then((result) => {
        console.log("User deleted successfully", result);
    })
    .catch((error) => {
        console.log("Error deleting user", error);
    });



// to delete all the users - deleteMany method take one argument filter

// users.deleteMany({isActive: false})
//     .then((result) => {
//         console.log("All users deleted successfully", result);
//     })
//     .catch((error) => {
//         console.log("Error deleting users", error);
//     });

module.exports = app;