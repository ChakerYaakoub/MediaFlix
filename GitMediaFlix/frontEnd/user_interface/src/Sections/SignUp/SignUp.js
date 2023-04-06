import "./SignUp.css";

import { LoginSignUp, InputSignUpLogin } from "../../components/index";
import { useContext, useState } from "react";
import { OpenSignUpContext } from "../../UseContext";
import axios from "../../PostUseFetch";
const SignUp = () => {
  const {
    setOpenSignUpData,
    setOpenLoginUpData,
    changeOpenSignUpData,
    changeOpenLoginUpData,
  } = useContext(OpenSignUpContext);
  const [values, setValues] = useState({
    firstNameInp: "",
    lastNameInp: "",
    emailInpSignUp: "",
    passInpSignUp: "",
    confInpSignUp: "",
  });
  const [usedEmail, setUsedEmail] = useState("");
  const inputs = [
    {
      id: 1,
      type: "text",
      name: "firstNameInp",
      className: "firstNameInp",
      placeholder: "First name...",
      errorMessage: "First Name Shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}",
      required: true,
    },
    {
      id: 2,
      type: "text",
      name: "lastNameInp",
      className: "lastNameInp",
      placeholder: "Last name...",
      pattern: "^[A-Za-z0-9]{3,16}",
      errorMessage: "Last Name Shouldn't include any special character!",
      required: true,
    },
    {
      id: 3,
      type: "email",
      name: "emailInpSignUp",
      className: "emailInpSignUp",
      placeholder: "Email...",
      errorMessage: "It should be a valid email address",
      errorMessageUsedEmail: usedEmail,
      required: true,
    },
    {
      id: 4,
      type: "password",
      name: "passInpSignUp",
      className: "passInpSignUp",
      placeholder: "Password...",
      errorMessage: "Password should be minimum 6 characters",
      minLength: 6,
      required: true,
    },
    {
      id: 5,
      type: "password",
      name: "confInpSignUp",
      className: "confInpSignUp",
      placeholder: "Repeat Password...",
      errorMessage: "Passwords don't match!",
      pattern: values.passInpSignUp,
      required: true,
    },
  ];
  const onChangeInp = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const REGISTER_URL = "/signup";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,
        {
          firstName: values.firstNameInp,
          lastName: values.lastNameInp,
          email: values.emailInpSignUp,
          password: values.passInpSignUp,
          confirmPassword: values.confInpSignUp,
        },
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      );
      if (response.data === "successfully create a user") {
        setOpenSignUpData(false);
        setOpenLoginUpData(true);
      } else {
        Object.entries(response.data).forEach(function (li) {
          if (li[0] === "usedEmail") {
            setUsedEmail(li[1]);
            console.log(usedEmail);
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <LoginSignUp>
        {/* <ClosingSignUpLogin closeLogin={closingSignUp} /> */}
        <button
          onClick={() => {
            changeOpenSignUpData(false);
          }}
          className="closing-login-signup-btn"
        >
          X
        </button>
        <div className="title">
          <h3 className="signUpTitle">SignUp</h3>
        </div>
        <div className="body">
          <form method="post" onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <InputSignUpLogin
                key={input.id}
                {...input}
                value={values[input.name]}
                onChangeInp={onChangeInp}
              />
            ))}

            <button className="signUpBtn">SignUp</button>
          </form>
        </div>
        <div className="SignUpfooter">
          <button
            className="back-to-login-btn"
            onClick={() => {
              changeOpenSignUpData(false);
              changeOpenLoginUpData(true);
            }}
          >
            Login
          </button>
        </div>
      </LoginSignUp>
    </div>
  );
};

export default SignUp;
