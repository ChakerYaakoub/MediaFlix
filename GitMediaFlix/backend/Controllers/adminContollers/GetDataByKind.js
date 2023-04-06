const mongoose = require("mongoose");

const Participant = require('../../schemaModels/Participant');

exports.GetDataByKind = async (req, res) => {
  try {
    const participants = await Participant.find({});
    const actors = participants.filter(participant => participant.kind === "actor");
    const directors = participants.filter(participant => participant.kind === "director");
    const writers = participants.filter(participant => participant.kind === "writer");

    res.status(200).json({ actors, directors, writers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
