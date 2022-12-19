import { UserModel } from "../db/models/user.model.js";

const userExist = async (email) => {
  //check the db if a user exist
  // const user = await UserModel.findOne({ email });
  // return !!!user;
};

const create = async (user) => {
  //create user
  // const newUser = await UserModel.create(user);
  // return newUser;
};

export { userExist, create };
