// importing stuff
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDb } from "./data/db.js";
import { signUp } from "./controllers/user.js";
import { signIn } from "./controllers/user.js";
import { signOut } from "./controllers/user.js";

const app = express();

connectDb();

dotenv.config();

// using middlewares
app.use(express.json());
app.use(cookieParser());

app.post("/signup", signUp);
app.post("/signin", signIn);
app.get("/signout", signOut);

app.listen(3000, () => {
  console.log("server started");
});
