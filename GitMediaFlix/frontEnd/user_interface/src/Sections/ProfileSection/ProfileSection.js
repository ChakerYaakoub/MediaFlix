import "./ProfileSection.css";
import { OpenSignUpContext } from "../../UseContext";
import React, { useState, useEffect, useContext } from "react";
import {
  PostWatchList,
  GetWatchList,
  AddWatchListUserToAnArray,
} from "../../GetPostWatchListFunctions";
import {
  MovieCard,
  MoviesSections,
  SectionWrapper,
  SectionHeader,
} from "../../components/index";
import { IsAuthenticated } from "../../isAuthenticatedFunction";
const ProfileSection = () => {
  const {
    isProfilePage,
    setIsProfilePage,
    movieCardList,
    setMovieCardList,
    userFirstName,
    lastName,
    email,
  } = useContext(OpenSignUpContext);
  // const [movieCardList, setMovieCardList] = useState([]);

  useEffect(() => {
    GetWatchList((data) => {
      const Moviecard = data?.map(function (movie) {
        return (
          <MovieCard
            key={movie._id}
            image={`http://localhost:3000/${movie.image}`}
            rate={movie.rate}
            title={movie.title}
            iconId={movie._id}
          />
        );
      });
      setMovieCardList(Moviecard);
    });
  }, []);
  IsAuthenticated((data) => {
    if (data === "Not authenticated") {
    } else {
    }
  });
  return (
    <>
      {/* <div className="myInfo">
        <div>
          Hello {userFirstName} {lastName}
        </div>
        <div>Email:{email}</div>
      </div> */}
      <SectionWrapper>
        {/* <div className="myInfo">
          <div>
            Hello {userFirstName} {lastName}
          </div>
          <div>Email:{email}</div>
        </div> */}

        <SectionHeader>{userFirstName}'s WatchList</SectionHeader>
        <div className="watchList-items">{movieCardList}</div>
      </SectionWrapper>
    </>
  );
};

export default ProfileSection;
