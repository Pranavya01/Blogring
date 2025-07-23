import express from "express";
import { approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getAllUsers, getDashboard, loginUser, registerUser } from "../controllers/adminController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUsers", getAllUsers);
router.get("/comments", auth, getAllComments);
router.get("/blogs", auth, getAllBlogsAdmin);
router.post("/delete-comment", auth, deleteCommentById);
router.post("/approve-comment", auth, approveCommentById);
router.post("/dashboard", auth, getDashboard);

export default router;