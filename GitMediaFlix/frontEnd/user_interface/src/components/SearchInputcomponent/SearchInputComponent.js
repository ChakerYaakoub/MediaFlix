import "./SearchInputComponent.css";
import { useRef, useState, useContext } from "react";

import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { OpenSignUpContext } from "../../UseContext";
import { Link } from "react-router-dom";
const SearchInputComponent = () => {
  const inputSearch = useRef();
  const {
    myInputValue,
    setMyInputValue,
    responseSearchData,
    setResponseSearchData,
  } = useContext(OpenSignUpContext);
  // const [myValue, setMyValue] = useState(" ");

  const categories = {
    romance: ["love", "romance", "heart", "couple", "relationship", "kiss"],
    action: ["action", "adventure", "fight", "war", "gun", "chase"],
    comedy: ["funny", "joke", "comedy", "laugh"],
    drama: ["drama", "emotional", "feelings", "tragic", "powerful"],
    fantasy: ["fantasy", "magic", "mythical", "legend"],
    thriller: ["thriller", "suspense", "scary", "horror", "intense", "terror"],
    adventure: ["adventure", "journey", "exploration", "treasure"],
    horror: ["horror", "scary", "fear", "nightmare"],
    musicals: ["musicals", "song", "dance", "sing"],
    mystery: ["mystery", "detective", "secret", "suspense"],
    science_fiction: ["sci-fi", "future", "technology", "space"],
    sports: ["sports", "athletic", "competition", "win"],
    animation: ["animation", "cartoon", "childish", "animated"],
    western: ["western", "cowboy", "saloon", "sheriff"],
  };
  const searchAndUpdatePreferences = async () => {
    try {
      if (inputSearch.current) {
        setMyInputValue(inputSearch.current.value);
        console.log(myInputValue);
      }

      axios
        .post(
          "http://localhost:3000/update-preferences",
          {
            phrase: { myInputValue },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          // console.log(response.data); // Here you can access the data from the response
          setResponseSearchData(response.data);
        });

      // }
      // });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="search-div">
        <input
          type="search"
          name="searchInp"
          placeholder="Search..."
          className="search-inp"
          ref={inputSearch}
        />
        <Link to="/search">
          <span style={{ color: "var(--color-darkest)" }}>
            {/* <Link to="/search"> */}
            <FaSearch
              onClick={() => searchAndUpdatePreferences(myInputValue)}
            />
          </span>
        </Link>
      </div>
    </>
  );
};

export default SearchInputComponent;
