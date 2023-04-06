
const MediaModel = require('../schemaModels/Media');

// const Partictpants = require("../schemaModels/Participant")

const GetCastFilm = async (req, res) => {
  try {const filmId = req.params.id;
    const film = await MediaModel.findById(filmId)
      .populate("director")
      .populate("writer")
      .populate("actors");

    const director = film.director;
    const writer = film.writer;
    const actors = film.actors;


  res.status(200).json({
    director,
    writer,
    actors,
  });

  } catch (error) {
   res.status(500).json({ error: "An error occurred" });
    };
};

module.exports = GetCastFilm;

// const Casts = [...director, ...writer, ...actors].map(person => {
//     if (person) {
//         return {
//             id: person._id,
//             firstName: person.firstName,
//             lastName: person.lastName,
//             info: person.info,
//             img: person.img,
//             kind: person.kind
//             // other properties
//         };
//     }
// });
