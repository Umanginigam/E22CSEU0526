// routes/postRoutes.js
const express = require('express');
const { getPosts } = require('../controllers/post.controllers');
// This route handles GET requests to fetch posts based on the query parameter
const router = express.Router();

router.get('/posts', getPosts);
module.exports = router;
