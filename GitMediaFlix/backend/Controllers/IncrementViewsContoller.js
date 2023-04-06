
const express = require("express");

const MediaModel = require('../schemaModels/Media');

const IncrementViewsContoller = async (req, res) => {
  // Fallback to retrieve client IP address if req.ip is undefined
  const clientIp = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  const movieId = req.params.id;

  // Check if the IP address exists in the movie's view.ipAddress array
  const movie = await MediaModel.findById(movieId);
  if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
  }
  if (movie.ipAddressView.includes(clientIp)) {
      return res.json({ message: "View count already incremented for this IP address" });
  }

  // Increment the view count and add the unique IP address
  movie.views += 1;
  movie.ipAddressView.push(clientIp);
  const updatedMovie = await movie.save();
  return res.status(200).json({ message: "View count incremented successfully!" });
};

module.exports = IncrementViewsContoller;










// const express = require("express");


// const MediaModel = require('../schemaModels/Media');

// const IncrementViewsContoller = async (req, res) => {
//     const movieId = req.params.id;
//     const clientIp = req.ip;

//     // Check if the IP address exists in the movie's view.ipAddress array
//     const movie = await MediaModel.findById(movieId);
//     if (!movie) {
//         return res.status(404).json({ message: "Movie not found" });
//     }
//     if (movie.ipAddressView.includes(clientIp)) {
//         return res.json({ message: "View count already incremented for this IP address" });
//     }

//     // Increment the view count and add the unique IP address

 
//         movie.views += 1;
//         movie.ipAddressView.push(clientIp);
//         const updatedMovie = await movie.save();
//         return res.status(200).json({ message: "View count incremented successfully!" });


    

// };


// module.exports = IncrementViewsContoller;
