import "./MovieCard.css";
import { useState, useRef, useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { OpenSignUpContext } from "../../UseContext";
import ReactStars from "react-rating-stars-component";
import { FaHeart } from "react-icons/fa";
import { IsAuthenticated } from "../../isAuthenticatedFunction";
import {
  PostWatchList,
  GetWatchList,
  AddWatchListUserToAnArray,
} from "../../GetPostWatchListFunctions";
// import {MovieCard} from "../../components/index";
const MovieCard = (props) => {
  const {
    setOpenLoginUpData,

    setAddToWatchListIdData,
    isLogin,
    isProfilePage,
    setIsProfilePage,
    setMovieCardList,
    myLocalStorage,
    setmyLocalStorage,
  } = useContext(OpenSignUpContext);
  if (localStorage.getItem("watchList")) {
    setmyLocalStorage(localStorage.getItem("watchList"));
  }
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const myHeartIcon = useRef();
  const myCard = useRef();

  // if (myHeartIcon.current && isLogin && localStorage.getItem("watchList")) {
  //   let myWatchList = localStorage.getItem("watchList");
  //   let watchList = JSON.parse(myWatchList);
  //   let isInWatchList1 = watchList.includes(myHeartIcon.current.id);

  //   if (isInWatchList1) {
  //     myHeartIcon.current.classList.add("addToWatchList");
  //   } else {
  //     myHeartIcon.current.classList.remove("addToWatchList");
  //   }
  // } else if (myHeartIcon.current && isLogin === false) {
  //   myHeartIcon.current.classList.remove("addToWatchList");
  // }
  useEffect(() => {
    if (myHeartIcon.current && isLogin && localStorage.getItem("watchList")) {
      let myWatchList = localStorage.getItem("watchList");
      let watchList = JSON.parse(myWatchList);
      let isInWatchList1 = watchList.includes(myHeartIcon.current.id);

      if (isInWatchList1) {
        myHeartIcon.current.classList.add("addToWatchList");
      } else {
        myHeartIcon.current.classList.remove("addToWatchList");
      }
    } else if (myHeartIcon.current && isLogin === false) {
      myHeartIcon.current.classList.remove("addToWatchList");
    }
  }, [myLocalStorage]);

  const addToWatchList = async (e) => {
    myHeartIcon.current.classList.toggle("addToWatchList");
    console.log(myHeartIcon.current.id);

    IsAuthenticated(async (data) => {
      if (data === "Not authenticated") {
        setOpenLoginUpData(true);
        setAddToWatchListIdData(myHeartIcon.current.id);
      } else {
        PostWatchList(myHeartIcon.current.id);

        if (!localStorage.getItem("watchList")) {
          localStorage.setItem("watchList", JSON.stringify([]));
        }
        let myWatchList = JSON.parse(localStorage.getItem("watchList"));
        if (myWatchList.includes(myHeartIcon.current.id)) {
          const index = myWatchList.indexOf(myHeartIcon.current.id);
          if (index != -1) {
            myWatchList.splice(index, 1);
            // if (isProfilePage) {
            //   myCard.current.classList.add("removeCard");
            //   GetWatchList((data) => {
            //     const Moviecard = data?.map(function (movie) {
            //       return (
            //         <MovieCard
            //           key={movie._id}
            //           image={`http://localhost:3000/${movie.image}`}
            //           rate={movie.rate}
            //           title={movie.title}
            //           iconId={movie._id}
            //         />
            //       );
            //     });
            //     setMovieCardList(Moviecard);
            //   });
            // }
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
    <>
      <div className="MovieRecommended" ref={myCard}>
        <div className="MovieCard-wrapper">
          <Link to={`/movieDetails/${props.iconId}`}>
            <img
              className="movie-recommended-img "
              src={props.image}
              alt="logo"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </Link>
          <div
            className={`heart-icon`}
            ref={myHeartIcon}
            id={props.iconId}
            onClick={addToWatchList}
          >
            <FaHeart />
          </div>
          <div className={`hideTitleRateMovie  ${isHovering ? "" : "hidden"}`}>
            <div className="rateMovie">
              <ReactStars
                count={5}
                size={17}
                activeColor="red"
                value={props.rate}
                isHalf={true}
              />
              {props.rate}
            </div>
            <div className="titleMovie">{props.title}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
