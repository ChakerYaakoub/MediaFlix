const mongoose = require('mongoose');


const visitorCountSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true,
    unique: true
  }
});

const VisitorCount = mongoose.model('VisitorCount', visitorCountSchema);

module.exports = VisitorCount;


