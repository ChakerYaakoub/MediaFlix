import { useContext } from "react";
// import { UseContextProvider } from "./UseContext";
import { OpenSignUpContext } from "./UseContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IsAuthenticated } from "./isAuthenticatedFunction";
import {
  GetWatchList,
  AddWatchListUserToAnArray,
} from "./GetPostWatchListFunctions";
import "./App.css";
import { Header } from "./Sections/index";

import {
  Home,
  Movies,
  MovieDetailsById1,
  Profile,
  SearchDataPage,
  PersonById,
} from "./pages/index";
import { Container, Footer } from "./components/index";

import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  const { setUserFirstName, setIslogin, setgetWatchListIdsData } =
    useContext(OpenSignUpContext);
  IsAuthenticated((data) => {
    if (data === "Not authenticated") {
      setIslogin(false);
    } else {
      setIslogin(true);
      setUserFirstName(data.first_name);
    }
  });
  return (
    <div className="all-sections-container">
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            {/* <Route path="/profile" element={<Profile />} /> */}

            {/* <Route
              exact
              path="/movieDetails/:id"
              element={<MovieDetailsById />}
            /> */}
            <Route exact path="/search" element={<SearchDataPage />} />
            <Route
              exact
              path="/movieDetails/:id"
              element={<MovieDetailsById1 />}
            />

            <Route exact path="/cast/:_id" element={<PersonById />} />

            <Route exact path="/AbouUs" element={<AboutUs />} />

            <Route exact path="/userProfile" element={<Profile />} />
          </Routes>
        </Container>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
