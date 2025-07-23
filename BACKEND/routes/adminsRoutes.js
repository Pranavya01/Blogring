import express from "express"
import { adminLogin, allBlogs, blogComments, deleteBlogComments, deleteBlogs, userDeleted, UserList } from "../controllers/adminsController.js";

const adminsRouter = express.Router();

adminsRouter.post("/login", adminLogin);
adminsRouter.get("/allUsers", UserList);
adminsRouter.delete("/deleteUser/:id", userDeleted);
adminsRouter.get("/allblogs", allBlogs);
adminsRouter.delete("/deleteBlog/:id", deleteBlogs);
adminsRouter.get("/allComments", blogComments);
adminsRouter.delete("/deleteComments/:id", deleteBlogComments);

export default adminsRouter;