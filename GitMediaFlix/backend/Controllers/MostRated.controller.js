const mostRated = require("../ModelsFunction/MostRated.model");
exports.GetRatedMovies = (req, res, next) => {
  mostRated
    .getmostRatedMovies()
    .then((ratedMovies) => {
      res.json(ratedMovies);
    })
    .catch((err) => {
      res.json(err);
    });
};
exports.GetRatedSeries = (req, res, next) => {
  mostRated
    .getRatedSeries()
    .then((ratedSeries) => {
      res.json(ratedSeries);
    })
    .catch((err) => {
      res.json(err);
    });
};
