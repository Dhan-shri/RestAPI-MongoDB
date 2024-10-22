// install the mangodb packages
const mongoose = require('mongoose');

require('dotenv').config();


async function dbConnect() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true, // to avoid deprecation warnings
            useUnifiedTopology: true,  // to avoid deprecation warnings
        });
        console.log('Connected to the mongoDb database atlas successfully');
    } catch (error) {
        console.log('Error connecting to the database', error);
    }
}


module.exports = dbConnect;