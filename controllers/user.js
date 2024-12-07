import User from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
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
    const decoded = await User.findOne({ email });
    if (!decoded) {
      res
        .json({
          message: "user not found",
        })
        .status(404);
    }
    const passwordVerifcation = await bcrypt.compare(
      password,
      decoded.password
    );
    if (passwordVerifcation) {
      const token = jwt.sign({ id: decoded._id }, process.env.JWT_SECRET);
      res
        .cookie("token", token, {
          maxAge: 10 * 60 * 1000,
          httpOnly: true,
        })
        .json({
          message: "signed in ",
        });
    } else {
      res.json({
        message: "incorrect message",
        success: false,
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

export const getMyProfile = async (req, res) => {
  const userId = req.user._id;
  const user = await User.findOne(userId);
  res.json({
    user,
  });
};
