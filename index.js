// importing stuff
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDb } from "./data/db.js";
import userRouter from "./routes/user.js";
import postRouter from "./routes/posts.js";
const app = express();

// mongodb connection
connectDb();

// configuring dotenv
dotenv.config();

// using middlewares
app.use(express.json());
app.use(cookieParser());
// using routers
app.use("/user", userRouter);
app.use("/post", postRouter);

// universal endpoints
app.listen(process.env.PORT, () => {
  console.log("server started");
});
