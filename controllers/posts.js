import Posts from "../models/posts.js";

export const allPosts = async (req, res) => {
  const posts = await Posts.find();
  res.json({ posts });
};
export const createPost = async (req, res) => {
  const userId = req.user._id;
  const { title, description } = req.body;

  const post = await Posts.create({ title, description, userId });
  res.json({
    message: "post added",
    success: true,
  });
};
