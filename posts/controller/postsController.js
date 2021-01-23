const Posts = require("../model/postsModel");

exports.createPost = async (req, res) => {
  const post = new Posts(req.body);
  try {
    await post.save();
    res.status(201).json({ post });
    console.log("A new post created! ", post);
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};

exports.getOnePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Posts.findById(id);
    res.json({ post });
    console.log("Single post: ", post);
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};

//Get  all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json({ posts });
    console.log("Posts: ", posts);
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};

//ship off to create-posts route
