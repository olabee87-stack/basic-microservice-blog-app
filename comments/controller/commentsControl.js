const Comments = require("../model/commentsModel");

//@ Post a new comment
exports.createComment = async (req, res) => {
  const comment = new Comments(req.body);

  try {
    await comment.save();
    res.status(201).json({ comment });
    console.log("New comment created");
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};

//@ Get all comments
exports.getComments = async (req, res) => {
  try {
    const comments = await Comments.find();
    res.json({ comments });
    console.log("Here are the comments ", comments);
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};

//@ Get one comment
exports.getOneComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comments.findById(id);
    res.json({ comment });
    console.log("Here is your comment ", comment);
  } catch (error) {
    return res.json(500).json({ Error: error.message });
  }
};
