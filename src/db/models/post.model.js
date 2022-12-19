import { model, Schema, Types } from "mongoose";

const postSchema = new Schema({
  image: { type: String, required: false },
  user: { type: Types.ObjectId, ref: "User", required: true },
  topic: { type: String, required: true },
  body: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const PostModel = model("Posts", postSchema);
export { PostModel };
