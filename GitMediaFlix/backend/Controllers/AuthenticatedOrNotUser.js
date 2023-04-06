const jwt = require("jsonwebtoken");
const { User } = require("../schemaModels/User");

const createToken = (user) => {
  const accessToken = jwt.sign(
    {
      user_id: user._id,
      user_firstName: user.firstName,

      user_lastName: user.lastName,
      user_email: user.email,

    },
    process.env.TOKEN_SECRET
  );
  return accessToken;
};

const isNotAuthenticated = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (err) {
    console.log("isAuthenticated");
    next();
  }
};

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    // req.user = await User.findById(decode.user_id);
    req.user = decode;
    next();
  } catch (err) {
    // console.log(err);

    res.json({
      message: "Authentication Failed",
    });
  }
};
const returnFirstNameifAuthenticated = async (req, res, next) => {
  try {
    if (req.header("Authorization")) {
      const token = req.header("Authorization");
      console.log(token);
      const decode = jwt.verify(token, process.env.TOKEN_SECRET);
      // req.user = await User.findById(decode.user_id);
      req.user = decode;
      res.json({
        first_name: req.user.user_firstName,
        last_name: req.user.user_lastName,
        email: req.user.user_email,
      });
    } else {
      res.json("Not authenticated");
    }
  } catch (err) {
    console.log(err);
    // res.json({
    //   message: "Authentication Failed",
    // });
  }
};
module.exports = {
  createToken,
  isNotAuthenticated,
  isAuthenticated,
  returnFirstNameifAuthenticated,
};
