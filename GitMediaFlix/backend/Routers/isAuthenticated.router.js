const router = require("express").Router();
const {
  returnFirstNameifAuthenticated,
} = require("../Controllers/AuthenticatedOrNotUser");
router.get("/isAuthenticated", returnFirstNameifAuthenticated);
module.exports = router;
