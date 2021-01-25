const mongoose = require("mongoose");

const commentsSchema = {
  content: [
    {
      type: String,
      required: true,
    },
  ],
};

const Comments = mongoose.model("Comments", commentsSchema);
module.exports = Comments;

//Ship off to comments controller
