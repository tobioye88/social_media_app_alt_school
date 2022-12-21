import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPostsByUser,
  getPostById,
} from "../controllers/post.controller.js";
import { createPostValidator } from "../middleware/validations/post.validator.js";
// create post
// view all post

const postRoutes = Router();

postRoutes.post("/", createPostValidator, createPost);
postRoutes.get("/", getAllPosts);
postRoutes.get("/by-user", getPostsByUser);
postRoutes.get("/:id", getPostById); // this has to be the last because the path is a variable.

export { postRoutes };
