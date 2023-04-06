const MediaModel = require('../schemaModels/Media');


exports.GetSimilarFilms = async (req, res) => {
    try {
        const filmId = req.params.id;
        const film = await MediaModel.findById(filmId)
            .populate("director", "category")
            .lean();

        const films = await MediaModel.find({
            $and: [
                {
                    $or: [
                        { category: film.category },
                        { title: { $regex: film.title, $options: "i" } },
                        { writer: film.writer },
                        { actors: { $in: film.actors } },
                    ],
                },
                {
                    _id: { $ne: filmId },
                },
            ],
        })
            .limit(10)
            .lean();

        //   if (films.length === 0) {
        //     res.json({ message: "No similar films found" });
        //   } else {
        res.json(films);
        //   }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};




