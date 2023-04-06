const { User } = require("../schemaModels/User");

const media = require("../schemaModels/Media");

exports.getTop10Recommandations = (id) => {
  return new Promise((resolve, reject) => {
    User.findById({ _id: id })
      .then((user) => {
        console.log(user);
        if (!user) {
          reject("no user");
        } else {
          const sortedPreferences = Object.entries(user.preferences).sort(
            (a, b) => b[1] - a[1]
          );
          const top3Categories = sortedPreferences
            .slice(0, 3)
            .map((entry) => entry[0]);
          return media.find({ category: { $in: top3Categories } });
        }
      })
      .then((FilmSeries) => {
        const top10filmsSeries = FilmSeries.sort(
          (a, b) => b.rate - a.rate
        ).slice(0, 10);
        resolve(top10filmsSeries);
      });
  });
};
