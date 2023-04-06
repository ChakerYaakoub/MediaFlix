const EditFilmFc = require('../../ModelsFunction/adminFc/EditFilmFc') ;






exports.EditFilmContoller = (req, res, next) => {

    return new Promise((resolve, reject) => {
        console.log(req.body)
       

        EditFilmFc.EditFilmFc(req)
        .then(result =>{res.status(200).json(result) ;})
        .catch(err => {res.status(404).json({ message: err }) ;}) 

    })


}











