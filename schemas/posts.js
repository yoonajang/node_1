
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  nickname : String,
  content : String,
  commentid : Number,
  createdAt : Date
});

const postsSchema = new mongoose.Schema({
    postsId: {
        type: Number, 
        unique: true
    },  
    user: {
        type: String,
        min: 3,
        max: 10,
        required: true,
    },
    password: {
        type: String,
        required: true,
      },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
    },
    createdAt: {
        type: Date,
        defalt: Date.now(),
    },
    comments: [commentSchema]
  },
  {
    timestamps: true
  }
  );


module.exports = mongoose.model("Comment", commentSchema);
module.exports = mongoose.model("Posts", postsSchema);

