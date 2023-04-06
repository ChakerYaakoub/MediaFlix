const media = require("../schemaModels/Media");

exports.getNewestMovies = () => {
  return new Promise((resolve, reject) => {
    media
      .find({ type: "movie" })
      .sort({ createdAt: -1 })
      .limit(10)
      .then((newestMovies) => {
        resolve(newestMovies);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
exports.getNewestSeries = () => {
  return new Promise((resolve, reject) => {
    media
      .find({ type: "series" })
      .sort({ createdAt: -1 })
      .limit(10)
      .then((newestSeries) => {
        resolve(newestSeries);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
