import "./NewestMovies.css";

import { MovieCard, MoviesSections } from "../../components/index";
import photo1 from "../../assets/images/photo1.jfif";
import useFetch from "../../getUseFetch";
const NewestMovies = () => {
  const { data } = useFetch("http://localhost:3000/newestMovies");

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
        titleMovieSection="Neweset Movies"
        MoviesList={Moviecard}
      />
    </>
  );
};

export default NewestMovies;
