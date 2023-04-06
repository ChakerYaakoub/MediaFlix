const preferencesModel = require("../ModelsFunction/preferences.model");

exports.getTop10Films = (req, res, next) => {
  preferencesModel
    .getTop10Recommandations(req.user.user_id)
    .then((top10filmsSeries) => {
      // console.log(top10filmsSeries);
      res.json(top10filmsSeries);
    })
    .catch((err) => {
      res.json(err);
    });
};
