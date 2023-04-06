const router = require("express").Router();
const bodyParser = require("body-parser");
const authController = require("../controllers/auth.controller");
const check = require("express-validator").check;

const { isNotAuthenticated } = require("../Controllers/AuthenticatedOrNotUser");
const { validationFirstNameInput } = require("../Controllers/validation");
const { validationLastNameInput } = require("../Controllers/validation");
const { validationEmailInput } = require("../Controllers/validation");
const { validationPasswordInput } = require("../Controllers/validation");
const { confirmPassword } = require("../Controllers/validation");
router.post(
  "/signup",
  bodyParser.json(),
  isNotAuthenticated,
  validationFirstNameInput,
  validationLastNameInput,
  validationEmailInput,
  validationPasswordInput,
  confirmPassword,
  authController.postSignup
);
router.post(
  "/login",
  bodyParser.json(),
  isNotAuthenticated,
  authController.postLogin
);

module.exports = router;
