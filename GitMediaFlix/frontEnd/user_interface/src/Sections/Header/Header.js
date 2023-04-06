// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";

import {
  NavItemPhone,
  NavItemSpan,
  NavItemDesktop,
  LoginBtn,
  LogoutBtn,
  SearchInputComponent,
} from "../../components/index";

import { FaSearch, FaBars, FaTimes, FaHome, FaUserTimes } from "react-icons/fa";
import { Login, SignUp } from "../index";

import { OpenSignUpContext } from "../../UseContext";
import { GiTv, GiCctvCamera } from "react-icons/gi";

const Header = () => {
  const { openSignUpData, openLoginData, isLogin } =
    useContext(OpenSignUpContext);

  const hiddenShownNav = useRef();
  const showNavBtn = useRef();
  const hideNavBtn = useRef();

  const hiddeShowNavFun = () => {
    hiddenShownNav.current.classList.toggle("addRemoveNav");
    showNavBtn.current.classList.toggle("disactiveShowBtn");
    hideNavBtn.current.classList.toggle("ActiveHideBtn");
  };

  // if(isLogin)
  return (
    <>
      <div>
        <div className="desktop-navbar">
          <nav className="container">
            <div className="left-side-navbar">
              <p className="website-name">
                Media<span>Flix</span>
              </p>
              <ul>
                <NavItemDesktop>
                  <Link to="/#">Home</Link>
                </NavItemDesktop>
                <NavItemDesktop>
                  <Link to="/Movies">Movies</Link>
                </NavItemDesktop>
                <NavItemDesktop>
                  <a href="/#">Series</a>
                </NavItemDesktop>
              </ul>
            </div>
            <div className="right-side-nav">
              {/* <div className="search-div">
                <input
                  type="search"
                  name="searchInp"
                  placeholder="Search..."
                  className="search-inp"
                />
                <span style={{ color: "var(--color-darkest)" }}>
                  <FaSearch />
                </span>
              </div> */}
              <SearchInputComponent />
              {/* <LoginBtn /> */}

              {!isLogin && <LoginBtn />}
              {isLogin && <LogoutBtn />}
            </div>
          </nav>
        </div>

        {openLoginData && <Login />}
        {openSignUpData && <SignUp />}
        <div className="phone-navbar">
          <div className="hidden-shown-nav" ref={hiddenShownNav}>
            <ul>
              <NavItemPhone>
                <span className="icon">
                  <FaHome />
                </span>
                <a className="navLinks" href="/#">
                  Home
                </a>
              </NavItemPhone>
              <NavItemPhone>
                <NavItemSpan>
                  <GiCctvCamera />
                </NavItemSpan>
                <a className="navLinks" href="/#">
                  Movies
                </a>
              </NavItemPhone>
              <NavItemPhone>
                <NavItemSpan>
                  <GiTv />
                </NavItemSpan>
                <a className="navLinks" href="/#">
                  Series
                </a>
              </NavItemPhone>
              <NavItemPhone>
                <NavItemSpan>
                  <FaUserTimes />
                </NavItemSpan>
                <a className="navLinks" href="/#">
                  Login
                </a>
              </NavItemPhone>
            </ul>
          </div>
          <nav>
            <p className="website-name">
              Media<span>Flix</span>
            </p>
            <div className="hamburger">
              <button
                className="open-nav-btn"
                ref={showNavBtn}
                onClick={hiddeShowNavFun}
              >
                <FaBars />
              </button>
              <button
                className="close-nav-btn"
                ref={hideNavBtn}
                onClick={hiddeShowNavFun}
              >
                <FaTimes />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
