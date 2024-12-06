// importing stuff
import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./data/db.js";
const app = express();

import { signUp } from "./controllers/user.js";
import { signIn } from "./controllers/user.js";

connectDb();

dotenv.config();

app.use(express.json());

app.post("/signup", signUp);
app.post("/signin", signIn);

app.listen(3000, () => {
  console.log("server started");
});
