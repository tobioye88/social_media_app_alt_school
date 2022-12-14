import * as userService from "../services/users.service.js";
const IUserRequest = {
  name: "",
  phone: "",
  email: "",
  role: "",
  password: "",
  confirmPassword: "",
};

const register = async (req, res) => {
  const userRequest = req.body;
  // check if a user already exist with the email
  if (await userService.userExist(userRequest.email)) {
    //create
    const newUser = await userService.create(userRequest);
    res.status(200).json(newUser);
  } else {
    res.status(400).json({ message: "User already exist" });
  }
};

const login = (req, res) => {
  const body = req.body;
  res.status(200).json(body);
};

export { register, login };
