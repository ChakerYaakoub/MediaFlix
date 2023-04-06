import "./MostRatedSeries.css";
import { useState } from "react";
import { MostRatedSeriesArr } from "../../Data/PreferencesData";
import { MovieCard, MoviesSections } from "../../components/index";
import useFetch from "../../getUseFetch";
import photo1 from "../../assets/images/photo1.jfif";
const MostRatedSeries = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/ratedSeries"
  );
  if (data) {
    console.log(data);
  }
  // console.log(data);
  const [theMostRatedSeriesArr, setMostRatedMoviesArr] =
    useState(MostRatedSeriesArr);
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

  return (
    <>
      <MoviesSections
        titleMovieSection="Most Rated Series"
        MoviesList={Moviecard}
      />
    </>
  );
};

export default MostRatedSeries;
