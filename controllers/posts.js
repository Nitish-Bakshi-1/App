import Posts from "../models/posts.js";

export const allPosts = async (req, res) => {
  const posts = await Posts.find();
  res.json({ posts });
};
export const createPost = async (req, res) => {
  const { title, description, userId } = req.body;
  await Posts.create({ title, description, user: req.user._id });
  res.json({
    message: "task added",
    success: true,
  });
};
