import { createContext, useState } from "react";

const OpenSignUpContext = createContext();
const UseContext = ({ children }) => {
  const [openSignUpData, setOpenSignUpData] = useState(false);
  const changeOpenSignUpData = (boolean) => {
    setOpenSignUpData(boolean);
  };
  const [openLoginData, setOpenLoginUpData] = useState(false);
  const changeOpenLoginUpData = (boolean) => {
    setOpenLoginUpData(boolean);
  };
  const [showLoginBtn, setShowLoginBtn] = useState(true);
  const changeShowLoginBtn = (boolean) => {
    setShowLoginBtn(boolean);
  };
  const [showLogoutBtn, setShowLogoutBtn] = useState(false);
  const changeShowLogoutBtn = (boolean) => {
    setShowLogoutBtn(boolean);
  };
  const [userFirstName, setUserFirstName] = useState("");
  const changeUserFirstName = (boolean) => {
    setUserFirstName(boolean);
  };

  const [showPreferencesComponent, setShowPreferencesComponent] =
    useState(false);
  const changeShowPreferencesComponent = (boolean) => {
    setShowPreferencesComponent(boolean);
  };
  const [addToWatchListIdData, setAddToWatchListIdData] = useState("");
  const [getWatchListIdsData, setgetWatchListIdsData] = useState([]);
  const [isLogin, setIslogin] = useState(false);

  const [isProfilePage, setIsProfilePage] = useState(false);
  const [movieCardList, setMovieCardList] = useState([]);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [myLocalStorage, setmyLocalStorage] = useState("");
  const [myInputValue, setMyInputValue] = useState("");
  const [responseSearchData, setResponseSearchData] = useState([]);


  const [newReviewSubmitted, setNewReviewSubmitted] = useState(false);
  const [newDataAfterReview, setNewDataAfterReview] = useState({});



  return (
    <OpenSignUpContext.Provider
      value={{
        openSignUpData,
        setOpenSignUpData,
        changeOpenSignUpData,
        openLoginData,
        setOpenLoginUpData,
        changeOpenLoginUpData,
        showLoginBtn,
        setShowLoginBtn,
        changeShowLoginBtn,
        showLogoutBtn,
        setShowLogoutBtn,
        changeShowLogoutBtn,
        userFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        setUserFirstName,
        changeUserFirstName,
        showPreferencesComponent,
        setShowPreferencesComponent,
        changeShowPreferencesComponent,
        addToWatchListIdData,
        setAddToWatchListIdData,
        getWatchListIdsData,
        setgetWatchListIdsData,
        isLogin,
        setIslogin,

        isProfilePage,
        setIsProfilePage,
        movieCardList,
        setMovieCardList,
        myLocalStorage,
        setmyLocalStorage,
        myInputValue,
        setMyInputValue,
        responseSearchData,
        setResponseSearchData,

        newReviewSubmitted,
        setNewReviewSubmitted,
        newDataAfterReview,
        setNewDataAfterReview

      }}
    >
      {children}
    </OpenSignUpContext.Provider>
  );
};
//3-export context to use, provider to wrap all components

export { UseContext, OpenSignUpContext };
