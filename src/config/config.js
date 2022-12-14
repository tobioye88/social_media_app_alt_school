import dotenv from "dotenv";
dotenv.config();

export const config = {
  mongodb: {
    url: process.env.MONGODB_URI,
  },
};
