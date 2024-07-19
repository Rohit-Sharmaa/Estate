import express from "express";
import {
  signup,
  signin,
  goolge,
  signOut,
} from "../controllers/auth.controllers.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", goolge);
router.get("/signout", signOut);

export default router;
