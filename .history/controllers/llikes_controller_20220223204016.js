const Like = require('../model/like');
const Post = require('../model/post');
const Comment = require('../model/comment');


module.exports.toggleLike = async function(req, res) {
    try {

        //like/toggle/?id=abcdef&type=Post
        let likable;
        let deleted = false;

        if (req.query.type == 'Post') {
            likable = await Post.findById(req.query.id).populate('likes');
        } else {
            likable = await Comment.findById(req.query.id).populate('likes');
        }


        //check if a like already exists
        let existingLike = await Like.findOne({
            likable: req.query.id,
            onModel: req.query.type,
            user: req.user._id

        })

        //if a like already exists then delete it
        if (existingLike) {

        } else {
            //else make a new like
        }


    } catch (err) {
        console.log(err);
        return res.json(500, {
            message: 'Internal Server Error'
        });
    }
}