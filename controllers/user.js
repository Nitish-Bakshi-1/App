import User from "../models/user.js";

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
