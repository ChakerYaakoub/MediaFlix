import React from "react";
import "./EachMovieDetails.css";
import { useParams } from "react-router-dom";
import useFetch from "../../getUseFetch";


import {
  SingleMovieInfoComponent,
  LoadingFilm,
  ErrorDataFilm,
  TrailaireFilm ,
  VideoFilm ,
  FilmCasts,
  MorelikethisFilm,
  ReviewTextFilm ,
  ReviewForm
} from "../../components/index";

const EachMovieDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:3000/echoFilm//movies/${id}`
  );

  return (
    <layout>
      {loading && <LoadingFilm />}
      {error && <ErrorDataFilm />}

      {data && (
        <>
          <SingleMovieInfoComponent movie={data} />

          <TrailaireFilm movie={data} />
          <VideoFilm movie={data} />
          <FilmCasts movie={data} />
          <ReviewTextFilm movie={data} />
          <ReviewForm movie={data} />
          <MorelikethisFilm movie={data} />
         

        </>
      )}
    </layout>
  );
};

export default EachMovieDetails;
