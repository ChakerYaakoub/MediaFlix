const rimraf = require('rimraf');
const MediaModel = require('../../schemaModels/Media');
const fs = require('fs');


const path = require('path');



function deleteDirectory(dirPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dirPath)) {
      fs.readdirSync(dirPath).forEach((file) => {
        const curPath = path.join(dirPath, file);
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteDirectory(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(dirPath);
      resolve();
    } else {
      reject(new Error(`${dirPath} does not exist`));
    }
  });
}




exports.DeleteOldFile = async (filmId) => {
  await MediaModel.findById(filmId)
    .then(film => {
      if (!film) {
        throw new Error(`No film found with id: ${filmId}`);
      }

      const folderType= film.type;
      const folderName = film.title.replace(/\s/g, '');
 
      
      const folderPath = `./uploads/${folderType}/${folderName}`;
      console.log(folderPath)

      rimraf(folderPath) ;
      // fs.rmdir(folderPath)

      // deleteDirectory(folderPath)
      //   .then(() => {
      //     console.log(`Folder "${dirPath}" deleted successfully.`);
      //   })
      //   .catch((err) => {
      //     console.error(`Error deleting folder: ${err.message}`);
      //   });



    })
    .catch(error => {
      console.error(error.message);
    });
};