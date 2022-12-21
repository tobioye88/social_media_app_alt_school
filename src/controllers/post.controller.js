import { Types } from "mongoose";
import * as postService from "../services/post.service.js";

const createPost = async (req, res) => {
  const rawPost = req.body;

  const newPost = await postService.createPost({
    ...rawPost,
    user: req.user._id,
  });
  res.status(201).json({ data: newPost });
};

const getAllPosts = async (req, res) => {
  const userId = req.user._id;
  const posts = await postService.getPosts(userId);
  res.json({ data: posts });
};

const getPostsByUser = async (req, res) => {
  const userId = req.user._id;
  const posts = await postService.getPostsByUserId(userId);
  res.json({ data: posts });
};

const getPostById = async (req, res) => {
  const postId = req.params.id;
  if (!Types.ObjectId.isValid(postId)) {
    res.status(400).json({ message: "Invalid post id" });
    return;
  }
  // const userId = req.user._id;
  let post = await postService.getPostById(postId);
  if (post.user._id.toString() !== req.user._id.toString()) {
    post = await postService.incrementPostView(post.id);
  }
  res.json({ data: post });
};

export { createPost, getAllPosts, getPostsByUser, getPostById };
