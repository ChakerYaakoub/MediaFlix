const router = require("express").Router();
const movie = require("../Controllers/GetMovieDetails.controller");

router.get("/movies/:id", movie.GetMovieFromId);

module.exports = router;
