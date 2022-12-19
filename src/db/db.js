import mongoose from "mongoose";
import { config } from "../config/config.js";

function dbConnect() {
  mongoose
    .connect(config.mongodb.url, { autoIndex: false })
    .then(() => console.log("Connected!"));
}

export { dbConnect };
