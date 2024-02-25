const mongoose = require('mongoose');

// load all the fields under .env in process
require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((error) => {
            console.log("Database facing connection issue");
            console.log(error);
            process.exit(1);
        });
};

module.exports = connectWithDb;
