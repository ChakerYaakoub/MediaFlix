const router = require("express").Router();
const newestMovies = require("../Controllers/NewestMoviesSeries.controller");

router.get("/newestMovies", newestMovies.GetNewMovies);
router.get("/newestSeries", newestMovies.GetNewSeries);

module.exports = router;
