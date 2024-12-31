import express from "express";
import {
  login,
  logout,
  register,
} from "../controllers/user.controller.js";

const router = express.Router();

// 1. For signup a user
router.route("/register").post(register);

// 2. For login a user
router.route("/login").post(login);

// 3. For logout to get a user
router.route("/logout").get(logout);
export default router;
