import "./Login.css";
import { useState, useEffect } from "react";
import { LoginSignUp } from "../../components/index";
import { useContext } from "react";
import { OpenSignUpContext } from "../../UseContext";
import { InputSignUpLogin } from "../../components/index";

import {
  PostWatchList,
  GetWatchList,
  AddWatchListUserToAnArray,
} from "../../GetPostWatchListFunctions";
import { IsAuthenticated } from "../../isAuthenticatedFunction";

import axios from "../../PostUseFetch";
const Login = ({ closeLogin }) => {
  const {
    changeOpenSignUpData,
    setOpenLoginUpData,
    changeOpenLoginUpData,
    setUserFirstName,
    setShowPreferencesComponent,
    addToWatchListIdData,
    setAddToWatchListIdData,
    setIslogin,
    setLastName,
    setEmail,
  } = useContext(OpenSignUpContext);

  const REGISTER_URL = "/login";
  const [values, setValues] = useState({
    emailInp: "",
    passwordInp: "",
  });
  // useEffect(() => {
  //   GetWatchList((data) => AddWatchListUserToAnArray(data));
  // }, [localStorage.getItem("watchList")]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,
        {
          email: values.emailInp,
          password: values.passwordInp,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data !== "") {
        console.log(response.data);
        localStorage.setItem("token", response.data);
        setOpenLoginUpData(false);
        setShowPreferencesComponent(true);
        setIslogin(true);
        if (addToWatchListIdData !== "") {
          try {
            const response1 = await axios.post(
              "/watchList",
              {
                watchlist_id: addToWatchListIdData,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: localStorage.getItem("token"),
                },
              }
            );
            setAddToWatchListIdData("");
            if (response1.data) {
              console.log(response1);
            }
          } catch (err) {
            console.log(err);
          }
        }

        GetWatchList((data) => AddWatchListUserToAnArray(data));

        IsAuthenticated((data) => {
          if (data !== "") {
            setUserFirstName(data.first_name);
            setLastName(data.last_name);
            setEmail(data.email);
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  function closeLoginOpenSignUp() {
    changeOpenSignUpData(true);
    changeOpenLoginUpData(false);
  }

  const onChangeInp = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };
  return (
    <>
      <LoginSignUp>
        <button
          onClick={() => {
            changeOpenLoginUpData(false);
          }}
          className="closing-login-signup-btn"
        >
          X
        </button>
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit}>
            <InputSignUpLogin
              type="email"
              className="emailInpLogin"
              name="emailInp"
              placeholder="Email.."
              errorMessage="It should be a valid email address"
              onChangeInp={onChangeInp}
            />
            <InputSignUpLogin
              type="password"
              className="passwordInpLogin"
              name="passwordInp"
              placeholder="Password.."
              minLength={6}
              required={true}
              errorMessage="Password should be minimum 6 characters"
              onChangeInp={onChangeInp}
            />
            <button className="loginBtn">Login</button>
          </form>
          {/* <div className="remember-div">
            <input type="checkbox" name="remember-me" />
            <label>Remember me</label>
          </div> */}
        </div>
        <div className="footer">
          <label>New to MediaFlix?</label>
          <button onClick={closeLoginOpenSignUp}>Sign up now</button>
        </div>
      </LoginSignUp>
    </>
  );
};

export default Login;
