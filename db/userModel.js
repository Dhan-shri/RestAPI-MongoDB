const mongoose = require('mongoose');




// schema in mongoose representq the structure of the document


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        // minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        // maxlength: 255,
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: true,
        // minlength: 5,
        unique: false,
    }
});


module.exports = mongoose.model.Users || mongoose.model('Users', userSchema);