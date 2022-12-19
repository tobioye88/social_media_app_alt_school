import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import * as userService from "../services/users.service.js";
// const IUserRequest = {
//   name: "",
//   phone: "",
//   email: "",
//   role: "",
//   password: "",
//   confirmPassword: "",
// };

const register = async (req, res) => {
  const userRequest = req.body;
  // check if a user already exist with the email
  const exist = await userService.userExist(userRequest.email);
  if (!exist) {
    //create

    const newUser = await userService.create({ ...userRequest, role: "USER" });
    res.status(200).json(newUser);
  } else {
    res.status(400).json({ message: "User already exist" });
  }
};

// const registerAdmin = async (req, res) => {
//   const userRequest = req.body;
//   // check if a user already exist with the email
//   const exist = await userService.userExist(userRequest.email);
//   if (!exist) {
//     //create

//     const newUser = await userService.create({ ...userRequest, role: "ADMIN" });
//     res.status(200).json(newUser);
//   } else {
//     res.status(400).json({ message: "User already exist" });
//   }
// };

const login = async (req, res) => {
  const body = req.body;
  // check if the user is in the db
  const user = await userService.getUserByEmail(body.email);
  if (!user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  // if the password matches ... ?????
  const isCorrectPassword = await bcrypt.compare(body.password, user.password);
  if (!isCorrectPassword) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  // give a token
  var token = jwt.sign(JSON.stringify(user), config.jwt.secret);
  res.status(200).json({ token, message: "success" });
};

export { register, login };
