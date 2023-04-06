const MediaModel = require('../../schemaModels/Media');
// const mongoose = require('mongoose');
// const upload = require('./multerMedia');

exports.EditFilmFc = async (req) => {
  try {
    const filmId = req.params.id;
    const image = req.files.image[0].path;
    const video = req.files.video[0].path;

    const updatedFilm = await MediaModel.findByIdAndUpdate(filmId, {
      type: req.body.type,
      title: req.body.title,
      dateYear: req.body.dateYear,
      category: req.body.category,
      trailer: req.body.trailer,
      description: req.body.description,
      actors: req.body.actors,
      writer: req.body.writer,
      director: req.body.director,
      image,
      video
    }, {new: true});

    console.log("film updated");
    return updatedFilm;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
