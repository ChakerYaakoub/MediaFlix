import "./ClosingSignUpLogin.css";

const ClosingSignUpLogin = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.closeLogin(false);
        }}
        className="closing-login-signup-btn"
      >
        X
      </button>
    </div>
  );
};

export default ClosingSignUpLogin;
