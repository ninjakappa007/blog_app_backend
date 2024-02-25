
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like a post
exports.likePost  = async (req , res) =>{
  try{
    const {post , user} = req.body ; 
    const like = new Like ({
        post , user
    });

    const savedLike = await like.save();

    // update the post collection on basis of this 
    const updatedPost = await Post.findByIdAndUpdate(post , {$push:{likes : savedLike._id}} , {new:true})
                        .populate("likes").exec();

    res.json({
        post:updatedPost
    })
  }
  catch(error){
    return res.status(400).json({
        error : "error while liking posts"
    })
  }
}

//unlike a post
exports.unlikePost  = async (req , res) =>{
    try{
        // here we are taking post id and like id in req
      const {post , like} = req.body ; 

        //find and delete from like collection 
        // if like id and post id matched then delete that like object
        const deleteLike = await Like.findOneAndDelete({post:post  , _id : like})

        // update post collection
        const updatedPost = await Post.findByIdAndUpdate(post , {$pull:{likes : deleteLike._id}} , {new:true})
                            .populate("likes").exec();

        res.json({
            post : updatedPost
        })
    }
    catch(error){
      return res.status(400).json({
          error : "error while unliking posts"
      })
    }
  }