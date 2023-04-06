const mongoose = require("mongoose");
// const Actor = require("./Actor");
// const Writer = require("./Writer");
// const Director = require("./Director");
// const User = require("./user");
const Participant = require("./Participant")


const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    firstName: String,
    lastName: String,
    titleReview : String ,
    review: String,
    rate: {
      type: Number,
      min: 0,
      max: 10,
    },
  },
  { timestamps: true }
);

// views: {
//   countView: {
//     type: Number,
//     default: 0,
//   },
//   ipAddress:[ {
//     type: String,
//     unique: true
//   }]
// },



const episodeSchema = new mongoose.Schema({
  name: String,
  episodeNumber: Number,
});
const seasonSchema = new mongoose.Schema({
  name: String,
  seasonNb: Number,
  // trailer: String,
  episodes: [episodeSchema],
});

const mediaSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["movie", "series"],
    },
    title: String,

    dateYear: {
      type: Number,
      default: 2022,
    },//chaker
    description: String,
    category: {
      type: String,
      enum: ["action",
        "adventure",
        "comedy",
        "drama",
        "fantasy",
        "horror",
        "musicals",
        "mystery",
        "romance",
        "science fiction",
        "sports",
        "thriller",
        "animation",
        "Western"],
    },

    trailer: {
      type: String,
      required: true,
    },//chaker

    image: {
      type: String,
    }, // chaker
    video: {
      type: String,
    }, // chaker

    actors: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Participant,
      },
    ],
    writer:
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Participant,
    }
    ,
    director:
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Participant,
    }
    ,


    rate: {
      type: Number,
      default: 0,
      min: 0,
      max: 10, 
       set: function(value) {
        return parseFloat(value.toFixed(1));
      },
    },
    countRate: {
      type: Number,
      default: 0,
    },
    reviews: [reviewSchema],
    views: {
      type: Number,
      default: 0,
    },

    ipAddressView: [{
      type: String,
      unique: true
    }]
    ,
    seasons: [seasonSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Media", mediaSchema);
