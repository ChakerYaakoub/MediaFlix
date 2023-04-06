const express = require("express");
const router = express.Router();
const Media = require("../schemaModels/Media");

router.get('/actor/:actorId/media', async (req, res) => {
  const { actorId } = req.params;

  try {
    const media = await Media.find({ actors: actorId });
    res.json(media);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;