import { Router } from "express";
import { createPost, getPosts } from "../controllers/post.controller.js";
import { createPostValidator } from "../middleware/validations/post.validator.js";
// create post
// view all post

const postRoutes = Router();

postRoutes.post("/", createPostValidator, createPost);
postRoutes.get("/", getPosts);

export { postRoutes };
