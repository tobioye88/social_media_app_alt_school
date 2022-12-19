import { PostModel } from "../db/models/post.model.js";

const createPost = async (post) => {
  const newPosts = await PostModel.create(post);
  return newPosts;
};

const getPosts = async () => {
  //TODO: paginate this
  const posts = await PostModel.find();
  return posts;
};

export { createPost, getPosts };
