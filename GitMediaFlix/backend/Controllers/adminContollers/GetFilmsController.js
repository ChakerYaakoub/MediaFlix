const EchoFilmFc = require('../../ModelsFunction/adminFc/EchoFilmFc') ;





exports.GetFilmsController = (req, res, next) => {

    return new Promise((resolve, reject) => {

        EchoFilmFc.EchoFilmFc()
        .then(result =>{res.status(200).json(result) ;})
        .catch(err => {res.status(404).json({ message: err }) ;}) 

    })


}



