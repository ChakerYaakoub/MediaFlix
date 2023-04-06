const MediaFc = require('../../ModelsFunction/adminFc/MediaFc') ;






exports.addFilmFcController = (req, res, next) => {

    return new Promise((resolve, reject) => {
        console.log(req.body)
       

        MediaFc.addFilmFc(req)
        .then(result =>{res.status(200).json(result) ;})
        .catch(err => {res.status(404).json({ message: err }) ;}) 

    })


}











