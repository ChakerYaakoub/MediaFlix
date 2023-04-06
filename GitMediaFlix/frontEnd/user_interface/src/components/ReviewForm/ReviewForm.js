import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import "./ReviewForm.css";
import { useContext } from "react";
import { OpenSignUpContext } from "../../UseContext";

const ReviewForm = ({ movie }) => {
    const {
        setOpenLoginUpData,
        isLogin,
        newReviewSubmitted,
        setNewReviewSubmitted,
        newDataAfterReview,
        setNewDataAfterReview
    } = useContext(OpenSignUpContext);

    const [succ, setSucc] = useState(false);


    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [titleReview, setTitleReview] = useState("");

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleLogin = () => {
        if (!isLogin) {
            setOpenLoginUpData(true);
        }
    };

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleTitleReviewChange = (event) => {
        setTitleReview(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isLogin) {
            setOpenLoginUpData(true);
        } else {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(
                    `http://localhost:3000/echoFilm/AddReview/${movie._id}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: token,
                        },
                        body: JSON.stringify({
                            rate: rating,
                            review: reviewText,
                            titleReview: titleReview,
                        }),
                    }
                );
                if (response.ok) {
                    const updatedMovie = await response.json();
                    setNewDataAfterReview(updatedMovie)
                    console.log("done");
                    setNewReviewSubmitted(true);
                    setSucc(true)
                    // Update the state or do other operations as needed
                } else {
                    console.error(response);
                }
            } catch (error) {
                console.error("Error submitting review:", error);
            }
        }

        if (isLogin) {
            setRating(0);
            setReviewText("");
            setTitleReview("");
        }

        setTimeout(() => {
            setSucc(false)

        }, 5000);




        // setNewReviewSubmitted(false);



    };

    return (
        <div className="p-4 rounded-lg border">
            <h2 className="text-lg font-semibold mb-2">Write a new review:</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label className="text-sm mb-1" htmlFor="rating">
                        Rate the Film:
                    </label>
                    <div className="flex items-center">
                        <Rating
                            count={5}

                            size={24}
                            activeColor="red"
                            value={rating}
                            isHalf={true}
                            onChange={handleRatingChange}
                            classNames="review-form-rating"
                            title={true}

                        />
                        <span className="mx-2">{rating} out of 5</span>
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-sm mb-1" htmlFor="titleReview">
                        Review Summary:
                    </label>
                    <input

                        id="titleReview"
                        type="text"
                        required
                        value={titleReview}
                        onChange={handleTitleReviewChange}
                        placeholder=" Your Review Summary"
                        className="px-3 py-2 border rounded-md text-slate-800 font-semibold focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-sm mb-1" htmlFor="review">
                        Your Review:
                    </label>
                    <textarea
                        //    onClick={handleLogin}
                        id="review"
                        required
                        value={reviewText}
                        onChange={handleReviewTextChange}
                        placeholder=" Great film ..."
                        className="px-3 py-2 border rounded-md text-slate-800 font-semibold  focus:outline-none focus:ring focus:ring-blue-300"
                    />





                </div>
                <div className="flex justify-end">




                    {!succ && <>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-red-900 text-white rounded-md hover:bg-red-600"
                        >
                            Post Review
                        </button>
                    </>}

                    {succ && <>

                        <button
                            type="button"
                            className="px-4 py-2 bg-green-600 text-white rounded-md"
                            disabled
                        >
                            Posted successfully
                        </button>
                    </>}



                </div>
            </form>
        </div>
    );
};

export default ReviewForm;
