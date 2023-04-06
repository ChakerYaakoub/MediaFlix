const myUpdatedPreferencesModel = require("../ModelsFunction/PreferencesUpdated.model");
exports.UpdatedPreferences = (req, res, next) => {
  myUpdatedPreferencesModel
    .UpdatePreferences(req.user.user_id, req.body.phrase)
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      res.json(err);
    });
};
