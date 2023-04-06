exports.isAdmin = (req, res, next) => {
  if (req.user.role === true) {
    return res.redirect("/test");
  }
  next();
};
exports.isUser = (req, res, next) => {
  if (req.user.role === false) {
    res.json("you must be a user");
  }
  next();
};
