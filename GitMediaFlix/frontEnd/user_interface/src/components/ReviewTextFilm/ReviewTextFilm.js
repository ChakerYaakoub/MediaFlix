import './ReviewTextFilm.css';
import DivReviewText from './DivReviewText';
import { useContext } from "react";
import { OpenSignUpContext } from "../../UseContext";

const ReviewTextFilm = ({ movie }) => {

    let reviewCount ;
    const {
        setOpenLoginUpData,
        isLogin,
        newReviewSubmitted,
        setNewReviewSubmitted,
        newDataAfterReview,
        setNewDataAfterReview
    } = useContext(OpenSignUpContext);

    if (newReviewSubmitted) {
         reviewCount = newDataAfterReview.reviews.length;

    } else {
         reviewCount = movie.reviews.length;
    }



    return (
        <div className='ratingText'>
            <hr />
            <p>Movie Reviews End Ratings : 
                <span className='pl-2'>
                    {reviewCount}  Reviews
                   
                </span>
            </p>
            {newReviewSubmitted && <DivReviewText reviews={newDataAfterReview.reviews} />}
            {!newReviewSubmitted && <DivReviewText reviews={movie.reviews} />}

        </div>
    );
};

export default ReviewTextFilm;
