import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

const authMiddleware = async (req, res, next) => {
  // get header
  try {
    const authorization = req.headers.authorization;
    // console.log(authorization);
    // get token
    const [_, token] = authorization.split(" ");
    // console.log(token);

    // check that a user has a token
    if (!token) {
      res.status(401).json({ message: "unauthorized" });
      return;
    }
    // check that the token is valid
    if (!jwt.verify(token, config.jwt.secret)) {
      res.status(401).json({ message: "unauthorized" });
      return;
    }
    // add user from the token to the request
    req.user = jwt.decode(token);

    next();
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ message: "unauthorized" });
  }
  // const headers = req.headers;
};

export { authMiddleware };
