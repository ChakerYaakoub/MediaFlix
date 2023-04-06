import "./SearchDataSection.css";
import { OpenSignUpContext } from "../../UseContext";
import { useRef, useState, useContext } from "react";
import {
  MovieCard,
  MoviesSections,
  SectionWrapper,
  SectionHeader,
} from "../../components/index";
const SearchDataSection = () => {
  const {
    responseSearchData,
    setResponseSearchData,
    myInputValue,
    setMyInputValue,
  } = useContext(OpenSignUpContext);
  //   console.log(responseSearchData);
  const Moviecard = responseSearchData?.map(function (movie) {
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
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Search: "{myInputValue}"</SectionHeader>
        <div className="watchList-items">{Moviecard}</div>
      </SectionWrapper>
    </>
  );
};

export default SearchDataSection;
