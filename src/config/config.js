import dotenv from "dotenv";
dotenv.config();

export const config = {
  mongodb: {
    url: process.env.MONGODB_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "S3CR3T@!",
    ttl: "1h",
  },
};
