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
        unique: [true, "Email already exists herer"]
    },
    password: {
        type: String,
        required: true,
        // minlength: 5,
        unique: false,
    },
    date: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model.Users || mongoose.model('Users', userSchema);