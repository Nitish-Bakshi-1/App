import User from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    await User.create({
      name,
      email,
      password,
    });

    res.json({
      success: true,
      message: "user signedup",
    });
  } catch (e) {
    console.log(e);
  }
};
export const signIn = async (req, res) => {
  try {
    const { password, email } = req.body;
    const currentUser = await User.findOne({
      password,
      email,
    });
    if (currentUser) {
      const token = jwt.sign({ id: currentUser._id }, "displined");
      res
        .cookie("token", token, {
          maxAge: 10 * 60 * 1000,
          httpOnly: true,
        })
        .json({
          message: "signed in ",
        });
    }
  } catch (e) {
    console.log(e);
  }
};
export const signOut = async (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
    })
    .json({
      message: "signed out",
    });
};
