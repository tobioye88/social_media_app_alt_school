import e from "express";
import express from "express";
import { dbConnect } from "./db/db.js";
import { userRoutes } from "./routes/users.route.js";

const app = express();
const PORT = process.env.PORT || 5050;

// init DB
// dbConnect();

//Middleware
app.use(express.json());

//routes
app.use("/users", userRoutes);

app.listen(PORT, () => console.log("Application running on port: " + PORT));
