const MediaModel = require('../../schemaModels/Media');
const mongoose = require('mongoose');
const upload = require('./multerMedia');


exports.addFilmFc = async (req) => {
  try {

      const image = req.files.image[0].path;
      const video = req.files.video[0].path;


      const film = new MediaModel({
        type: req.body.type,
        title: req.body.title,
        dateYear:req.body.dateYear,
        category:req.body.category,
        trailer: req.body.trailer,
        description: req.body.description,
       
        category: req.body.category,
        actors: req.body.actors,
        writer: req.body.writer,
        director: req.body.director,
        
        image,
        video
      });

      const savedFilm = await film.save();
      console.log("film saved");
      return savedFilm;
 
    
  } catch (err) {
    console.error(err);
    throw err;
  }
};