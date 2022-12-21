import express from "express";
import { dbConnect } from "./db/db.js";
import { authMiddleware } from "./middleware/auth.middleware.js";
import { postRoutes } from "./routes/posts.route.js";
import { userRoutes } from "./routes/users.route.js";

const app = express();
const PORT = process.env.PORT || 5050;

//Middleware
app.use(express.json());

//routes
app.use("/users", userRoutes);
app.use("/posts", authMiddleware, postRoutes);

// init DB
dbConnect(() =>
  app.listen(PORT, () => console.log("Application running on port: " + PORT))
);
