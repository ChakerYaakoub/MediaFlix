const MediaModel = require('../../schemaModels/Media');


exports.EchoFilmFc = async () => {
    try {
        
        const Film = await MediaModel.find({}).sort({ createdAt: -1 });
        return Film;
    } catch (err) {
        console.log('Error in fetching film data:', err);
        return err;
    } 
};