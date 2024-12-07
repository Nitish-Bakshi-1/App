import express from "express";
import isAuthenticated from "../middlewares/auth.js";

import { signUp, signIn, signOut } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", isAuthenticated, signOut);

export default router;
