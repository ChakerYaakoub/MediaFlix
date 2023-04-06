const router = require("express").Router();
const { isAuthenticated } = require("../Controllers/AuthenticatedOrNotUser");
const PreferencesUpdated = require("../Controllers/PreferencesUpdated.controller");

router.post(
  "/update-preferences",
  isAuthenticated,
  PreferencesUpdated.UpdatedPreferences
);

module.exports = router;
