import "./NewestSeies.css";
import { MovieCard, MoviesSections } from "../../components/index";
import useFetch from "../../getUseFetch";
import photo1 from "../../assets/images/photo1.jfif";
const NewestSeries = () => {
  const { data } = useFetch("http://localhost:3000/newestSeries");
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
      <MoviesSections
        titleMovieSection="Neweset Series"
        MoviesList={Moviecard}
      />
    </>
  );
};

export default NewestSeries;
