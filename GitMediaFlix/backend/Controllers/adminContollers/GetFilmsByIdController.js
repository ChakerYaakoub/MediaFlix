const MediaModel = require('../../schemaModels/Media');

exports.GetFilmsByIdController = async (req, res, next) => {
    try {
        const film = await MediaModel.findById(req.params.id);
        res.status(200).json(film) ;
    } catch (err) {
        res.status(500).json({ message: 'Error getting film by id' });
    }
}
