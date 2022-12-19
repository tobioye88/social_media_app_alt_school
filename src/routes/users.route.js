import { Router } from "express";
import { login, register } from "../controllers/users.controller.js";
import {
  registerValidator,
  loginValidator,
} from "../middleware/validations/user.validator.js";

// create user
// register user
const userRoutes = Router();

userRoutes.post("/register", registerValidator, register);
// userRoutes.post("/register/admin", registerValidator, registerAdmin);
userRoutes.post("/login", loginValidator, login);
// user login

export { userRoutes };
