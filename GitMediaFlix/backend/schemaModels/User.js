const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Media = require("./Media");
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024, //chakre
      min: 6, //chaker
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },

    tel: {
      type: String,
      // required: true,
    },
    dateBirth: {
      type: Date, // 2000 ==> 1/1/2000
      // required: true,
    },
    viewedLog_id: [
      {
        // historique

        type: mongoose.SchemaTypes.ObjectId,
        ref: Media,
      },
    ],
    watchlist_id: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Media,
      },
    ],

    review: [
      {
        media_id: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: Media,
        },
        review: String,
        rating: Number,
      },
      { timestamps: true },
    ], // maybe ma na3mala //
    preferences: {
      romance: {
        type: Number,
      },
      action: {
        type: Number,
      },
      comedy: {
        type: Number,
      },
      drama: {
        type: Number,
      },
      fantasy: {
        type: Number,
      },
      thriller: {
        type: Number,
      },
      adventure: {
        type: Number,
      },
      horror: {
        type: Number,
      },
      musicals: {
        type: Number,
      },
      mystery: {
        type: Number,
      },
      science_fiction: {
        type: Number,
      },
      sports: {
        type: Number,
      },
      science_fiction: {
        type: Number,
      },
      sports: {
        type: Number,
      },
      animation: {
        type: Number,
      },
      western: {
        type: Number,
      },
    },
  },

  { timestamps: true }
); // timestamps : updateAt / createdAt
const User = mongoose.model("User", userSchema);

const categories = {
  romance: ["love", "romance", "heart", "couple", "relationship", "kiss"],
  action: ["action", "adventure", "fight", "war", "gun", "chase"],
  comedy: ["funny", "joke", "comedy", "laugh"],
  drama: ["drama", "emotional", "feelings", "tragic", "powerful"],
  fantasy: ["fantasy", "magic", "mythical", "legend"],
  thriller: ["thriller", "suspense", "scary", "horror"],
  adventure: ["adventure", "journey", "exploration", "treasure"],
  horror: ["horror", "scary", "fear", "nightmare"],
  musicals: ["musicals", "song", "dance", "sing"],
  mystery: ["mystery", "detective", "secret", "suspense"],
  science_fiction: ["sci-fi", "future", "technology", "space"],
  sports: ["sports", "athletic", "competition", "win"],
  thriller: ["thriller", "intense", "suspense", "terror"],
  animation: ["animation", "cartoon", "childish", "animated"],
  western: ["western", "cowboy", "saloon", "sheriff"],
};

const searchAndUpdatePreferences = async (userId, searchQuery) => {
  const words = searchQuery.split(" ");
  Object.keys(categories).forEach((category) => {
    const categoryWords = categories[category];
    let categoryCount = 0;
    words.forEach((word) => {
      if (categoryWords.includes(word)) {
        categoryCount = +1;
      }
    });
    if (categoryCount > 0) {
      User.findByIdAndUpdate(
        { userId },
        { $inc: { [`preferences.${category}`]: categoryCount } }
      );
    }
  });
};
module.exports = { User, searchAndUpdatePreferences };
