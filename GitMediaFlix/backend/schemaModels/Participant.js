const mongoose = require("mongoose");
const PartictpantSchema = new mongoose.Schema({
  firstName: {type:String},
  lastName: {type:String},
  info:  {type:String},
  img:  {type:String},
  kind: {type:String},
});
module.exports = mongoose.model("Particitpant", PartictpantSchema);






// const Participant = mongoose.model("Participant", PartictpantSchema);

// cons


