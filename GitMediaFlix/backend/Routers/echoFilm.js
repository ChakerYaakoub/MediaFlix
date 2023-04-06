const router = require("express").Router();
const movie = require("../Controllers/GetMovieDetails.controller");
const GetCastFilm = require("../Controllers/GetCastFilm");
const IncrementViewsContoller = require("../Controllers/IncrementViewsContoller");
const GetSimilarFilms = require("../Controllers/GetSimilarFilms"); 
const AddReviewController = require("../Controllers/AddReviewController"); 
const { isAuthenticated } = require("../Controllers/AuthenticatedOrNotUser");
const bodyParser = require("body-parser");

router.get("/movies/:id", movie.GetMovieFromId);

router.get("/CastsFilm/:id", GetCastFilm);

router.put("/IncrementViews/:id", IncrementViewsContoller);

router.get("/GetSimilarFilms/:id", GetSimilarFilms.GetSimilarFilms);

router.post("/AddReview/:id",
 bodyParser.json(),
isAuthenticated,
 AddReviewController);

 
// router.post("/AddReview/:id",
// bodyParser.json(),
// isAuthenticated,
// AddReviewController);






module.exports = router;
