import express, { Router } from "express";
import { allPosts } from "../controllers/posts.js";
import { createPost } from "../controllers/posts.js";
import isAuthenticated from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", isAuthenticated, allPosts);
router.post("/new", isAuthenticated, createPost);
export default router;
