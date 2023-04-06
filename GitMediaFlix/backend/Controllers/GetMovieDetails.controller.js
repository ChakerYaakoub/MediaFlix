const movieDetails = require("../ModelsFunction/GetMovieDetails.model");

exports.GetMovieFromId = (req, res, next) => {
  movieDetails
    .GetMovieDetails(req.params.id)
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};
