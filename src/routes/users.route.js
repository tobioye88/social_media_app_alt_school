import { Router } from "express";
import { login, register } from "../controllers/users.controller.js";
import { registerValidator } from "../middleware/validations/user.validator.js";

// create user
// register user
const userRoutes = Router();

userRoutes.post("/register", registerValidator, register);
userRoutes.post("/login", login);
// user login

export { userRoutes };
