const media = require("../schemaModels/Media");
exports.GetMovieDetails = (id) => {
  return new Promise((resolve, reject) => {
    media
      .findById(id)
      .then((movie) => {
        resolve(movie);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
