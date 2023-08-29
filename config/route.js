const express = require('express');
const route = express.Router();
const postsController = require('../controller/postController');
const commentController = require('../controller/commentController');

route.get('/', postsController.getPost);
route.post('/create-post', postsController.createPost);
route.post('/add-comment/:id', commentController.addComment);


module.exports = route;