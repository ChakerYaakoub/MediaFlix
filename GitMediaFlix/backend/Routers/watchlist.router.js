const router = require("express").Router();
const bodyParser = require("body-parser");
const { isAdmin } = require("../controllers/isAdminOrUser");
const { isAuthenticated } = require("../Controllers/AuthenticatedOrNotUser");
const watchListController = require("../Controllers/watchlist.controller");
router.post(
  "/watchList",
  bodyParser.json(),
  isAuthenticated,
  watchListController.PostWatchList
);

router.get(
  "/watchList",
  bodyParser.json(),
  isAuthenticated,
  watchListController.GetWatchList
);

module.exports = router;
