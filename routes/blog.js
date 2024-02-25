const express  = require("express") ; 
const router = express.Router();

// importing controller

const {likePost , unlikePost} = require("../controllers/likeController")
const {createComment} = require("../controllers/commentController")
const {createPost , getAllPost} = require("../controllers/PostController")



// mapping create
router.get("/" , )

router.post("/comments/create" , createComment)

router.post("/post/createpost" ,createPost )

router.get("/posts" ,getAllPost )

router.post("/likes/like" , likePost)

router.post("/likes/unlike" , unlikePost)

// export
module.exports = router