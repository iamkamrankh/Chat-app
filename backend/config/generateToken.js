// need  to install jsonwebtoken npm i jsonwebtoken it will secure user authenication

const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return token;
};

module.exports = generateToken;
