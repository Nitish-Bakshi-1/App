import mongoose from "mongoose";
const objectId = mongoose.Types.ObjectId();

const schema = mongoose.schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    userId: objectId,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Posts = mongoose.model("Posts", schema);
export default Posts;
