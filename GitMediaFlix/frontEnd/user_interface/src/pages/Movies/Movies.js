import "./Movies.css";
import { useContext } from "react";
import { OpenSignUpContext } from "../../UseContext";
import {
  Header,
  Preferences,
  NewestTenMovies,
  NewestSeries,
  MostRatedMovies,
  MostRatedSeries,
} from "../../Sections/index";
const Home = () => {
  const { showPreferencesComponent } = useContext(OpenSignUpContext);
  return (
    <>
      <NewestTenMovies />
      {/* <NewestSeries /> */}
    </>
  );
};

export default Home;
