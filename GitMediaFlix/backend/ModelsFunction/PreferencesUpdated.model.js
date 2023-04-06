const express = require("express");
const { User } = require("../schemaModels/User");
const Media = require("../schemaModels/Media");
const Participant = require("../schemaModels/Participant");
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

// exports.UpdatePreferences = (userId, phrase) => {
//   return new Promise((resolve, reject) => {
//     console.log(phrase);
//     const words = phrase.myInputValue.split(" ");
//     Object.keys(categories).forEach((category) => {
//       const categoryWords = categories[category];
//       let categoryCount = 0;
//       words.forEach((word) => {
//         if (categoryWords.includes(word)) {
//           categoryCount = +1;
//         }
//       });

//       if (categoryCount > 0) {
//         return User.findByIdAndUpdate(
//           { _id: userId },
//           { $inc: { [`preferences.${category}`]: categoryCount } }
//         );
//       }
//     });

//     Promise.all(promises)
//       .then((updatedUsers) => {
//         resolve(updatedUsers);
//       })
//       // .then((updatedUser) => {
//       //   resolve(updatedUser);
//       // })

//       // .then(() => {
//       //   // console.log(phrase.myInputValue);
//       //   const words = phrase.myInputValue.split(" ");
//       //   const category = getCategory(phrase);
//       //   return Media.find({
//       //     $or: [
//       //       {
//       //         $or: words.map((word) => ({
//       //           title: { $regex: word, $options: "i" },
//       //         })),
//       //       },
//       //       {
//       //         $or: words.map((word) => ({
//       //           description: { $regex: word, $options: "i" },
//       //         })),
//       //       },
//       //       // { actors: { $regex: phrase.myInputValue, $options: "i" } },
//       //       // { writer: { $regex: phrase.myInputValue, $options: "i" } },
//       //       // { director: { $regex: phrase.myInputValue, $options: "i" } },
//       //       // { dateYear: { $regex: phrase.myInputValue, $options: "i" } },
//       //       {
//       //         category: category ? { $regex: category, $options: "i" } : null,
//       //       },
//       //     ].filter((condition) => condition),
//       //   }).then((movies) => {
//       //     console.log(movies);
//       //     resolve(movies);
//       //   });
//       // })
//       .catch((err) => {
//         reject(err);
//         console.log(err);
//       });
//   });
// };
exports.UpdatePreferences = async (userId, phrase) => {
  console.log(phrase);
  const words = phrase.myInputValue.split(" ");
  const promises = Object.keys(categories).map((category) => {
    const categoryWords = categories[category];
    let categoryCount = 0;
    words.forEach((word) => {
      if (categoryWords.includes(word)) {
        categoryCount = +1;
      }
    });

    if (categoryCount > 0) {
      return User.findByIdAndUpdate(
        { _id: userId },
        { $inc: { [`preferences.${category}`]: categoryCount } }
      ).exec();
    }
  });

  // try {
  //   const updatedUsers = await Promise.all(promises);
  //   return updatedUsers;
  // } catch (err) {
  //   console.log(err);
  //   throw err;
  // }

  try {
    const words = phrase.myInputValue.split(" ");
    const category = getCategory(phrase);

    const media = await Media.find({
      $or: [
        {
          $or: words.map((word) => ({
            title: { $regex: word, $options: "i" },
          })),
        },
        {
          $or: words.map((word) => ({
            description: { $regex: word, $options: "i" },
          })),
        },
        {
          actors: {
            $in: await Participant.find({
              $or: words.map((word) => ({
                $and: [
                  { firstName: { $regex: word, $options: "i" } },
                  { lastName: { $regex: word, $options: "i" } },
                ],
              })),
            }).distinct("_id"),
          },
        },
        {
          writer: {
            $in: await Participant.find({
              $or: words.map((word) => ({
                $and: [
                  { firstName: { $regex: word, $options: "i" } },
                  { lastName: { $regex: word, $options: "i" } },
                ],
              })),
            }).distinct("_id"),
          },
        },
        {
          director: {
            $in: await Participant.find({
              $or: words.map((word) => ({
                $and: [
                  { firstName: { $regex: word, $options: "i" } },
                  { lastName: { $regex: word, $options: "i" } },
                ],
              })),
            }).distinct("_id"),
          },
        },
        // { dateYear: { $regex: /\b\d{4}\b/ } }, // Match 4-digit year in whole words
        category ? { category: { $regex: category, $options: "i" } } : null,
      ].filter((condition) => condition),
    });

    return media;
  } catch (error) {
    console.log(error);
  }
};
const getCategory = (phrase) => {
  const words = phrase.myInputValue.split(" ");

  for (const [category, keywords] of Object.entries(categories)) {
    if (words.some((word) => keywords.includes(word))) {
      return category;
    }
  }

  return null;
};
