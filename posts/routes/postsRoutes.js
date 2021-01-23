const express = require("express");
const router = express.Router();

// Import routes func from controllers
const {
  createPost,
  getPosts,
  getOnePost,
} = require("../controller/postsController");

//@ POST - creates a new post
router.post("/", createPost);

//@ GET - gets all posts
router.get("/", getPosts);

//@Get - get one post by ID
router.get("/:id", getOnePost);

module.exports = router;

//ship off to the server
