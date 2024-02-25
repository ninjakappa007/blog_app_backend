//import model

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");


// business logic
exports.createComment = async (req , res)=>{
    try{
        //fetch data from req body
        const {post , user , body} = req.body;
        //create comment body
        const comment = new Comment({
            post , user , body
        });

        // save the comment into database
        const saveComment = await comment.save();

        //find post by id , then update the comment array of post model
        const updatedPost = await Post.findByIdAndUpdate(post , {$push:{comments:saveComment._id}} , {new:true})
                            .populate("comments") //populates the comments array with comment documents
                            .exec();
        res.json({
            post: updatedPost
        })
    }
    catch(error){

        return res.status(500).json({
            error: `Error while creating comment: ${error.message}`,
        })

    }
}