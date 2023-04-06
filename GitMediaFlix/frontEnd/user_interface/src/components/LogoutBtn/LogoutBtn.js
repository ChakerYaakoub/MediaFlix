import "./LogoutBtn.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { OpenSignUpContext } from "../../UseContext";

const LogoutBtn = (props) => {
  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("watchList");
    setUserFirstName("");
    setShowLogoutBtn(false);
    setShowLoginBtn(true);
    setShowPreferencesComponent(false);
    setIslogin(false);
    // setgetWatchListIdsData("");
    setmyLocalStorage("");
  };
  const {
    userFirstName,
    setUserFirstName,
    setShowLogoutBtn,
    setShowLoginBtn,

    setShowPreferencesComponent,
    myLocalStorage,
    setmyLocalStorage,
    setIslogin,
  } = useContext(OpenSignUpContext);
  return (
    <>
      <Link to="/userProfile">
        <span className="userName">{userFirstName}</span>
      </Link>
      {/* <span className="userName">{userFirstName}</span> */}
      <button className="logout-btn" onClick={removeToken}>
        Logout
      </button>
    </>
  );
};

export default LogoutBtn;
