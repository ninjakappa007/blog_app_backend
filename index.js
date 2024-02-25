const express  = require('express');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000; // Use the PORT from the environment variable or default to 3000

// middleware
app.use(express.json());

const blog = require("./routes/blog")

// mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT , ()=>{
    console.log(`Server started at port ${PORT}`)
})

app.get('/' , (req , res)=>{
    res.send("<h1>This is homepage</h1>")
})

