import "./MostRatedMovies.css";
import { useState, useContext } from "react";
import { MostRatedMoviesArr } from "../../Data/PreferencesData";
import { MovieCard, MoviesSections } from "../../components/index";
import useFetch from "../../getUseFetch";
import photo1 from "../../assets/images/photo1.jfif";
import { IsAuthenticated } from "../../isAuthenticatedFunction";
import { OpenSignUpContext } from "../../UseContext";
const MostRatedMovies = () => {
  const { setIslogin, setUserFirstName } = useContext(OpenSignUpContext);

  const [theMostRatedMoviesArr, setMostRatedMoviesArr] =
    useState(MostRatedMoviesArr);
  const { data, loading, error } = useFetch(
    "http://localhost:3000/ratedMovies"
  );
  if (data) {
    console.log(data);
  }

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
      {/* <SectionWrapper>
          <SectionHeader>For You</SectionHeader>
          <div className="MoviesSeriesRecommended">
            <Carousel breakPoints={breakPoints}>{Moviecard}</Carousel>
          </div>
        </SectionWrapper> */}
      <MoviesSections
        titleMovieSection="Most Rated Movies"
        MoviesList={Moviecard}
      />
    </>
  );
};

export default MostRatedMovies;
