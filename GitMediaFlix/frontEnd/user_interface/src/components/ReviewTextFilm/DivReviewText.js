import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import {AiOutlineArrowDown} from "react-icons/ai"

const DivReviewText = ({ reviews }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const reviewsToDisplay = showAll ? reviews : reviews.slice(-1);

  return (
    <>
      {reviewsToDisplay.map((review) => (
        <div className="pb-3" key={review._id}>
          <article
            style={{ border: "1px solid rgb(44 47 50)" }}
            className="border-slate-200 rounded-sm text-white p-4"
          >
            <div class="flex items-center  space-x-4">
              <div class="space-y-1 font-medium text-white">
                <p>
                  {review.firstName} {review.lastName}
                </p>
              </div>
            </div>
            <div className="p-1">
              <div class="flex items-center mb-1">
                <span>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="red"
                    value={review.rate}
                    isHalf={true}
                    edit={false}
                  />
                </span>
                <h3 class="ml-2 text-sm font-semibold text-white">
                  {" "}
                  {review.rate.toFixed(1)} out of 5
                </h3>
              </div>
              <footer class="mb-1 text-sm">
                <p>{review.titleReview}</p>
              </footer>
              <div class=" movieIdDescription mb-2 font-medium text-sm">{review.review}</div>
            </div>
          </article>
        </div>
      ))}
      {!showAll && reviews.length > 1 && (
        <button
          className=" bg-red-900 hover:bg-red-600 text-white py-1 px-3 rounded-md border border-white hover:border-transparent transition duration-300"
          onClick={toggleShowAll}
        >
          Show all reviews  <span style={{ color: "white" }}> {'>>'}  </span>
        </button>
      )}
      {showAll && (
        <button
          className=" bg-red-900 hover:bg-red-600 text-white py-1 px-3 rounded-md border border-white hover:border-transparent transition duration-300"
          onClick={toggleShowAll}
        >
          Show less
        </button>
      )}
    </>
  );
};

export default DivReviewText;
