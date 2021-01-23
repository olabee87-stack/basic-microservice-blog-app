const express = require("express");
const router = express.Router();

// Import routes func from controllers
const { createPost, getPosts } = require("../controller/postsController");

//@ POST - creates a new post
router.post("/", createPost);

//@ GET - gets all posts
router.get("/", getPosts);

module.exports = router;

//ship off to the server
