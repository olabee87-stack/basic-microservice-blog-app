exports.createPost = async (req, res) => {
  res.send("I am creating the posts");
};

//Get posts
exports.getPosts = async (req, res, next) => {
  res.send("I am getting the posts");
};

//ship off to create-posts route
