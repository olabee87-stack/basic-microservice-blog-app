//Quick and dirty DB
const { randomBytes } = require("crypto"); //generate random ids

// Make-do db to store and retrieve all posts
const posts = {};

exports.createPost = (req, res) => {
  const id = randomBytes(4).toString("hex"); //generate randm ids for posts
  const { title } = req.body; //user's input

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
};

//Get posts
exports.getPosts = (req, res, next) => {
  res.send(posts);
};

//ship off to create-posts route

//es6 style
// export async function createPost(req, res) {
//   res.send("I am creating the posts");
// }

// //Get posts
// export async function getPosts(req, res, next) {
//   res.send("I am getting the posts");
// }
