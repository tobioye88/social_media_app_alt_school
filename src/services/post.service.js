import { Types } from "mongoose";
import { PostModel } from "../db/models/post.model.js";

const createPost = async (post) => {
  const newPosts = await PostModel.create(post);
  return newPosts;
};

const getPosts = async () => {
  //TODO: paginate this
  const posts = await PostModel.find().populate("user");
  return posts;
};

const getPostsByUserId = async (userId) => {
  //TODO: paginate this
  const posts = await PostModel.find({
    user: new Types.ObjectId(userId),
  }).populate("user");
  return posts;
};

const getPostById = async (postId) => {
  const post = await PostModel.findById(postId).populate("user");
  return post;
};

const incrementPostView = async (postId) => {
  const post = await PostModel.findOneAndUpdate(
    { _id: Types.ObjectId(postId) },
    { $inc: { views: 1 } },
    { new: true }
  );
  console.log("inc", post);

  return post;
};

export {
  createPost,
  getPosts,
  getPostsByUserId,
  getPostById,
  incrementPostView,
};
