const myNewestMovies = require("../ModelsFunction/NewestMoviesSeries.model");
exports.GetNewMovies = (req, res, next) => {
  myNewestMovies
    .getNewestMovies()
    .then((newestMovies) => {
      res.json(newestMovies);
    })
    .catch((err) => {
      res.json(err);
    });
};
exports.GetNewSeries = (req, res, next) => {
  myNewestMovies
    .getNewestSeries()
    .then((newestSeries) => {
      res.json(newestSeries);
    })
    .catch((err) => {
      res.json(err);
    });
};
