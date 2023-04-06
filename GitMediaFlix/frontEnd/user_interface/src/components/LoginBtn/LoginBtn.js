import "./LoginBtn.css";
import { useContext } from "react";
import { OpenSignUpContext } from "../../UseContext";
import React from "react";

const LoginBtn = () => {
  const { setOpenLoginUpData } = useContext(OpenSignUpContext);
  return (
    <>
      <button
        className="login-btn"
        onClick={() => {
          setOpenLoginUpData(true);
        }}
      >
        Login
      </button>
    </>
  );
};

export default LoginBtn;
