const check = require("express-validator").check;

exports.validationFirstNameInput = check("firstName")
  .not()
  .isEmpty()
  .withMessage("please enter your first name");

exports.validationLastNameInput = check("lastName")
  .not()
  .isEmpty()
  .withMessage("please enter your last name");

exports.validationEmailInput = check("email")
  .not()
  .isEmpty()
  .withMessage("Email is required")
  .isEmail()
  .withMessage("your email is not valid");

exports.validationPasswordInput = check("password")
  .isLength({ min: 6 })
  .withMessage("your password is invalid");

exports.confirmPassword = check("confirmPassword").custom((value, { req }) => {
  if (value === req.body.password) return true;
  else throw "password and confirm password don't match";
});
