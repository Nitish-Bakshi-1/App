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
    const decoded = await User.findOne({
      email,
    });

    if (!decoded) {
      res
        .json({
          message: "user not found",
        })
        .status(404);
    }

    const token = jwt.sign({ id: decoded._id }, process.env.JWT_SECRET);
    res
      .cookie("token", token, {
        maxAge: 10 * 60 * 1000,
        httpOnly: true,
      })
      .json({
        message: "signed in ",
      });
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
