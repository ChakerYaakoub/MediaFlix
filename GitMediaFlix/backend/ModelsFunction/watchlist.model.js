const { User } = require("../schemaModels/User");

exports.postUserWatchList = (user_id, movieSeries_id) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: user_id })
      .then((user) => {
        if (!user) {
          reject("User not found");
        }
        const index = user.watchlist_id.findIndex((id) =>
          id.equals(movieSeries_id)
        );
        let update = {};
        if (index === -1) {
          update = { $addToSet: { watchlist_id: movieSeries_id } };
        } else {
          update = { $pull: { watchlist_id: movieSeries_id } };
        }
        User.findByIdAndUpdate(
          user_id,
          update,
          { new: true },
          (error, updatedUser) => {
            if (error) {
              return reject(error);
            }
            resolve(updatedUser);
          }
        );
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
// exports.postUserWatchList = (user_id, movieSeries_id) => {
//   return new Promise((resolve, reject) => {
//     connectDB
//       .geInstance()
//       .then(() => {
//         return User.findOne({ _id: user_id }).then((user) => {
//           const index = user.watchlist_id.findIndex((id) =>
//             id.equals(movieSeries_id)
//           );
//           let update = {};
//           if (index === -1) {
//             update = { $addToSet: { watchlist_id: movieSeries_id } };
//           } else {
//             update = { $pull: { watchlist_id: movieSeries_id } };
//           }
//           User.findByIdAndUpdate(
//             user_id,
//             update,
//             { new: true },
//             (error, updatedUser) => {
//               if (error) {
//                 return reject(error);
//               }
//               resolve(updatedUser);
//             }
//           );
//         });
//       })
//       .catch((err) => {
//         console.log(err);

//         reject(err);
//       });
//   });
// };
exports.GetUserWatchList = (user_id) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: user_id })
      .populate("watchlist_id")
      .select("watchlist_id")
      .then((watchList) => {
        const watchListArray = watchList.watchlist_id;
        if (watchListArray.length === 0) {
          reject("there is nothing to watch later");
        } else {
          resolve(watchListArray);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
