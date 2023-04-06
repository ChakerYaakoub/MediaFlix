const media = require("../schemaModels/Media");

exports.getmostRatedMovies = () => {
  return new Promise((resolve, reject) => {
    media
      .find({ type: "movie" })
      .sort({ rate: "desc" })
      .limit(10)
      .then((ratedMovies) => {
        resolve(ratedMovies);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
exports.getRatedSeries = () => {
  return new Promise((resolve, reject) => {
    media
      .find({ type: "series" })
      .sort({ rate: -1 })
      .limit(10)
      .then((ratedSeries) => {
        resolve(ratedSeries);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
