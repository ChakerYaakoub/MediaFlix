import "./Home.css";
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
  const { isLogin, isProfilePage, setIsProfilePage } =
    useContext(OpenSignUpContext);
  setIsProfilePage(false);
  console.log(isProfilePage);
  return (
    <>
      {isLogin && <Preferences />}
      <NewestTenMovies />
      <NewestSeries />
      <MostRatedMovies />
      <MostRatedSeries />
    </>
  );
};

export default Home;
