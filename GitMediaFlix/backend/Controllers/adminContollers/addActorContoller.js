const ActorFc = require('../../ModelsFunction/adminFc/ActorFc')






exports.addActorController = (req, res, next) => {

    return new Promise((resolve, reject) => {

        ActorFc.addActorFc(req)
        .then(result => {   resolve(result)})
        .catch(err => { reject(err)}) 

    })


}











