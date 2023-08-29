const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postModel = new Schema({
    message : {
        type: String,
        required: true,
        minlength: 25
    },
    name : {
        type: String,
        required: true
    },
    comments: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Comment"
        }
    ],

},{timestamps: true});


module.exports = mongoose.model('post', postModel);