const express = require("express");
const router = express.Router();

const {
  createComment,
  getComments,
  getOneComment,
} = require("../controller/commentsControl");

//@ POST - Create a comment on a post
router.post("/:id", createComment);

//@GET - Get all comments on posts
router.get("/", getComments);

//@GET - Get all comments associated with a given post
router.get("/:id", getOneComment);

module.exports = router;
