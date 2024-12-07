import jwt from "jsonwebtoken";
import User from "../models/posts.js";

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res
      .json({
        message: "login first",
      })
      .status(404);
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.find({ _id: decoded._id });
  next();
};
export default isAuthenticated;
