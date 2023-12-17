const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token; //here i have declare a token let is using for declaring anything
  if (
    // we are gonna sent the token and the token will be bearer token
    req.headers.authorization &&
    req.headers.authorization.startsWith("bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //token will look something like this aklhfdjalkfj
      // take the token and remov the bearer from it

      // decodes token id
      const decoded = jwt.verify(token, process.env.JWT_secret);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
});

module.exports = { protect };
