
// import mongoose
const mongoose = require("mongoose");

// route handler
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId , 
        ref : "Post" , //reference to post model
    } , 
    user:{
        type:String , 
        required : true , 
    } , 
    body:{
        type : String , 
        required : true , 
    }
});

// export
// below i exported the commentSchema() as Comment
module.exports = mongoose.model("Comment" , commentSchema)