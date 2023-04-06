const express = require("express");
const router = express.Router();
const multer = require('multer');
// const path = require('path');
const Partictpants = require("../schemaModels/Participant")
// const checkPra =require("../Controllers/addPar")
const fs = require('fs');
const uuid = require('uuid').v4; // id for files



const storage = multer.diskStorage({
  destination: (req, file, cb) => { 
    try {
      console.log('Uploading fils ...');
      const uploadPath = `uploads/Casts`; 
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
const upload = multer({ storage: storage });




//gets all the posts
router.get("/", async (req, res) => {
  //bring me to / posts
  try {
    const actors = await Partictpants.find();
    res.json(actors);
  } catch (err) {
    res.json({ message: err });
  }
});


router.post("/", upload.single("img"), async (req, res) => {
  const participants = new Partictpants({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    info: req.body.info,
    img: req.file.path,
    kind: req.body.kind,
  });
  try {
    const savedPar = await participants.save();
    res.json(savedPar);
  } catch (err) {
    res.json({ message: err });
  }
});

//get specific Post
router.get('/:ParId',async(req, res) =>{
  // console.log(req.params.postId);
  try{
  const Par = await Partictpants.findById(req.params.ParId);
  res.json(Par);
  }catch(err){
    res.json({message: err})
  }
});


//delete specific Participant
router.delete('/:ParId',async(req, res) =>{
  // console.log(req.params.ParticipantId);
  try{
  const remnvePar =await Partictpants.deleteOne({_id: req.params.ParId});
  res.json("remnvePar");
  }catch(err){
    res.json({message: err})
  }
});

//update specific Post
router.put("/:ParId", upload.single("img"), async (req, res) => {
  try {
    let updatedPar = await Partictpants.findById(req.params.ParId);
    if (!updatedPar) return res.status(404).json({ message: "Participant not found" });

    updatedPar.firstName = req.body.firstName;
    updatedPar.lastName = req.body.lastName;
    updatedPar.info = req.body.info;
    updatedPar.kind = req.body.kind;

    if (req.file) {
      updatedPar.img = req.file.path;
    }

    const savedPar = await updatedPar.save();
    res.json(savedPar); 
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



module.exports = router;


