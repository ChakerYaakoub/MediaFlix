import React, { useRef, useEffect, useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { OpenSignUpContext } from "../../UseContext";
import "./SingleMovieInfoComponent.css";
import { FaHeart } from "react-icons/fa";
import { IsAuthenticated } from "../../isAuthenticatedFunction";
import { PostWatchList } from "../../GetPostWatchListFunctions";
const SingleMovieInfoComponent = ({ movie }) => {
  const { setOpenLoginUpData, setAddToWatchListIdData, isLogin ,
    newReviewSubmitted,
    setNewReviewSubmitted,
    newDataAfterReview,
    setNewDataAfterReview} =
    useContext(OpenSignUpContext);

    let rate; 

    if (newReviewSubmitted) {
      rate = newDataAfterReview.rate;

 } else {
      rate = movie.rate;
 }  


  const myHeartIcon = useRef();

  useEffect(() => {
    if (myHeartIcon.current && isLogin && localStorage.getItem("watchList")) {
      console.log("sarsouuuuuuuuuuuuuurrr");
      let myWatchList = localStorage.getItem("watchList");
      let watchList = JSON.parse(myWatchList);
      let isInWatchList1 = watchList.includes(myHeartIcon.current.id);

      if (isInWatchList1) {
        // console.log("sarsouuuuuuuuuuuuuurrr");
        myHeartIcon.current.classList.add("addToWatchList");
      } else {
        myHeartIcon.current.classList.remove("addToWatchList");
      }
    } else if (myHeartIcon.current && isLogin === false) {
      myHeartIcon.current.classList.remove("addToWatchList");
    }
  }, [localStorage.getItem("watchList")]);

  const addToWatchList = async (e) => {
    myHeartIcon.current.classList.toggle("addToWatchList");
    console.log(myHeartIcon.current.id);

    IsAuthenticated(async (data) => {
      if (data === "Not authenticated") {
        setOpenLoginUpData(true);
        setAddToWatchListIdData(myHeartIcon.current.id);
      } else {
        PostWatchList(myHeartIcon.current.id);
        let myWatchList = JSON.parse(localStorage.getItem("watchList"));
        if (myWatchList.includes(myHeartIcon.current.id)) {
          const index = myWatchList.indexOf(myHeartIcon.current.id);
          if (index != -1) {
            myWatchList.splice(index, 1);
          }
        } else {
          if (myHeartIcon.current && myHeartIcon.current.id) {
            myWatchList.push(myHeartIcon.current.id);
          }
        }

        localStorage.setItem("watchList", JSON.stringify(myWatchList));
      }
    });
  };
  return (
    <div className="containerMovieInfoImg">
      <img
        src={`http://localhost:3000/${movie.image}`}
        alt={movie.name}
        className="movieImg"
      />
      <img
        src={`http://localhost:3000/${movie.image}`}
        alt={movie.name}
        className="movieImgBackground"
      />
      <div className="movieInfo">
        <h1 className="movieIdTitle">
          {movie.title}
          <br />
        </h1>

        <div className="movieIdCategoryDate">
          <p className="movieIdCategoy">{movie.category}</p>
          <span className="movieIdDate">{movie.dateYear}</span>
        </div>
        <span
          className="heartAddToWatchList"
          ref={myHeartIcon}
          id={movie._id}
          onClick={addToWatchList}
        >
          <FaHeart />
        </span>
        <div className="ratingMovieId">
          <span> Rating : </span>
          <ReactStars
            count={5}
            size={24}
            activeColor="red"
            value={rate}
            isHalf={true}
          />
          <span> {rate}/5 </span>
        </div>

        <div className="movirIdViews">
          <span> Views : </span>
          <span> {movie.views} </span>
        </div>

        <p className="movieIdDescription">{movie.description}</p>
      </div>
    </div>
  );
};

export default SingleMovieInfoComponent;
