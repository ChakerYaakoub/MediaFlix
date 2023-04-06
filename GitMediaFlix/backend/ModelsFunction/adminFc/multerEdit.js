// config/multer.js
const multer = require('multer');
const fs = require('fs');
const uuid = require('uuid').v4; // id for files 

const DeleteOldFile =require('../../ModelsFunction/adminFc/DeleteOldFile');



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
        DeleteOldFile.DeleteOldFile(req.params.id) ;

      const filmName = req.body.title.replace(/\s/g, '');
      console.log('Uploading fils ...');
      const uploadPath = `uploads/${req.body.type}/${filmName}`;
      fs.mkdirSync(uploadPath, { recursive: true });
      cb(null, uploadPath);
    } catch (error) {
      console.error('Error:', error.message);
    }
  },
  filename: (req, file, cb) => {
    try {
      cb(null, `${Date.now()}-${uuid()}-${file.originalname}`);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
});
const Edit = multer({ storage });

module.exports = Edit;

