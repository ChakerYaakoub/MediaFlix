/*Bsmellah */
const router = require("express").Router();
const preferences = require("../Controllers/preferences.controller");
const { isAuthenticated } = require("../Controllers/AuthenticatedOrNotUser");

router.get(
  "/preferences",

  isAuthenticated,
  preferences.getTop10Films
);

module.exports = router;
