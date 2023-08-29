const commentModel = require('../model/commentModel')
const postModel = require('../model/postModel');

const addComment = (req, res) => {
    if(req.body.comment === ''){
        res.redirect('/')
    } else{
        let newComment = {
            comment: req.body.comment,
            post_id: req.params.id
        }
        let comment = new commentModel(newComment);
        comment.save()
            .then(() => {
                updatePostData(req.params.id, comment._id, res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

function updatePostData(postId, commentId, res){
    postModel.findById(postId)
            .then(post => {
                post.comments.push(commentId)
                post.save()
                .then(() => {
                    res.redirect('/')
                })
                .catch(err => {
                    console.log(err)
                })

            })
            .catch(err => {
                console.log(err)
            })
}

module.exports = {
    addComment 
}