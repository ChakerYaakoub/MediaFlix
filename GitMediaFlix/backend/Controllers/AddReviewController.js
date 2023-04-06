


const MediaModel = require('../schemaModels/Media');



const AddReviewController = async (req, res) => {

  

  

    const movieId = req.params.id;
    const { rate, review,titleReview } = req.body;
    console.log(rate)
    const userId = req.user.user_id; // assuming that the user is already authenticated
  console.log(`movie id is ${ req.user.user_id}`)
    try {
       
      
        const movie = await MediaModel.findById(movieId);
        if (!movie) {
            return res.status(404).send("Movie not found");
        }

        const newReview = {
            userId: userId,
            firstName: req.user.user_firstName,
            lastName:req.user.user_lastName,
            review: review,
            titleReview: titleReview,
            rate: rate 
        };
        console.log("Before calculation:", movie.rate, movie.countRate, rate);
        movie.reviews.push(newReview);
        movie.rate = (movie.rate * movie.countRate + rate) / (movie.countRate + 1);
        movie.countRate++;

        await movie.save();

        res.json(movie);
    } catch (error) {
        console.error("Error submitting review:", error);
        res.status(500).send("Internal server error");
    }

};

module.exports = AddReviewController;

// MediaModel.updateMany({}, { $set: { rate: 0 } }).then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   });