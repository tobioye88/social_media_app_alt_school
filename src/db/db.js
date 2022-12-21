import mongoose from "mongoose";
import { config } from "../config/config.js";

function dbConnect(callback) {
  mongoose.set("strictQuery", false);
  mongoose.connect(config.mongodb.url, { autoIndex: false }).then(() => {
    console.log("Connected!");
    callback();
  });
}

export { dbConnect };
