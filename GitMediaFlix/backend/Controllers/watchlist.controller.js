const watchlistModel = require("../ModelsFunction/watchlist.model");

exports.PostWatchList = (req, res, next) => {
  watchlistModel
    .postUserWatchList(req.user.user_id, req.body.watchlist_id)
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      res.json(err);
    });
};
exports.GetWatchList = (req, res, next) => {
  console.log("biiiiiiiiiiii");
  watchlistModel
    .GetUserWatchList(req.user.user_id)
    .then((watchListArray) => {
      res.json(watchListArray);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
};
