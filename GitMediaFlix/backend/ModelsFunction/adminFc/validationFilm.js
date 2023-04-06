const MediaModel = require('../../schemaModels/Media')

// const mongoose = require('mongoose');


const fs = require('fs');



exports.validationFilm = async(req,res,next) => {  

    try {
        // await connectDB.connectDB();
     
        
        if (!req.body) {
            return res.status(400).json({ error: 'req.body is empty or not defined' });
        }

        const title = req.body.title;
    
       
        if (!title) {
           
            await DeleteUpload(req) ;
        
          
            return res.status(400).json({ error: 'title is required.' });
        }
            // const isExist = await MediaModel.findOne({title: req.title}).count() ; >0
            // const isExist = await MediaModel.countDocuments({ title }); >0
            // const isExist = await MediaModel.countDocuments({ title: req.body.title }).exec();
            // console.log(typeof(req.body.title)) ;

        const isExist = await MediaModel.exists({ title });
     
       
        if (isExist) {
         
          
            await DeleteUpload(req) ;

            return res.status(404).json({ error: `"${title}"` });
        }

        next();
    } catch (err) {
        // mongoose.disconnect();
        // console.log(err.message)
       
        return res.status(500).json({ error: err.message });
    }
    //  finally {
    //     await mongoose.disconnect();
    //     console.log('mongoDb disconnect')
    // }

    }
   

const DeleteUpload = async (req) => {
    
        // remove uploaded files
        fs.unlink(req.files.image[0].path, (err) => {
            if (err) throw err;
          
        });
        fs.unlink(req.files.video[0].path, (err) => {
            if (err) throw err;
            
        });
        // mongoose.disconnect();

        // console.log('mongoDb disconnect')
        
    

   return
};
