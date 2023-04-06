const router = require("express").Router();
const rated = require("../Controllers/MostRated.controller");

router.get("/ratedMovies", rated.GetRatedMovies);
router.get("/ratedSeries", rated.GetRatedSeries);

module.exports = router;
