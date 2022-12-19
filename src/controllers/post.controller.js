import * as postService from "../services/post.service.js";

const createPost = async (req, res) => {
  const rawPost = req.body;
  const newPost = await postService.createPost(rawPost);
  res.status(201).json({ data: newPost });
};

const getPosts = async (req, res) => {
  const posts = await postService.getPosts();
  res.json({ data: posts });
};

export { createPost, getPosts };
