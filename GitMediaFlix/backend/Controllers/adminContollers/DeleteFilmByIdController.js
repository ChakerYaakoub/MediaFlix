const MediaModel = require('../../schemaModels/Media');
// const DeleteOldFile =require('../../ModelsFunction/adminFc/DeleteOldFile');

const rimraf = require('rimraf');

exports.DeleteFilmByIdController = async (req, res) => {
    // Find the film to be deleted
    const film = await MediaModel.findById(req.params.id);

    //delete the fils films
    const folderType = film.type;
    const folderName = film.title.replace(/\s/g, '');


    const folderPath = `./uploads/${folderType}/${folderName}`;
    console.log(folderPath)

    rimraf(folderPath);

    // Delete the film
    await film.remove()

        .then(film => {
            if (!film) {
                return res.status(404).send({
                    message: "Film not found with id " + req.params.id
                });
            }

            res.status(200).send({ message: "Film deleted successfully!" });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Film not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete film with id " + req.params.id
            });
        });
};
