import "./preferences.css";
import { useState } from "react";
import Top10RecommandationsArr from "../../Data/PreferencesData";
import { MovieCard, MoviesSections } from "../../components/index";
import { IsAuthenticated } from "../../isAuthenticatedFunction";
import useFetch from "../../getUseFetch";

const Preferences = () => {
  const [preferencesData, setPreferencesData] = useState(
    Top10RecommandationsArr
  );
  const { data, loading, error } = useFetch(
    "http://localhost:3000/preferences",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "",
      },
    }
  );

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
      <MoviesSections titleMovieSection="For You" MoviesList={Moviecard} />
      {/* <div>{data[0].title}</div> */}
    </>
  );
};

export default Preferences;
