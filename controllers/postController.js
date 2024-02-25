const Post = require("../models/postModel");

// logic for creating post
exports.createPost =async (req , res)=>{
    try{
        //fetch data from req body
        const {title , body} = req.body ; 

        const post = new Post(
            {title , body }
            )

        const savePost =await post.save();

        res.json({post : savePost})
    }
    catch(error){
        return res.status(400).json({
            error : "error while creating post"
        })
    }
}

// logic for getting all posts
exports.getAllPost =async (req , res)=>{
    try{
        const posts = await Post.find()
            .populate(["likes", "comments"]) // Pass an array of fields to populate
            .exec();

        res.json({posts})
    }
    catch(error){
        return res.status(400).json({
            error : "error while getting posts"
        })
    }
}