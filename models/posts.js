import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: "true",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Posts = new mongoose.model("Posts", schema);
export default Posts;
