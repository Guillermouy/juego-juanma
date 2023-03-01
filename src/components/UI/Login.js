import { useContext, useState, useReducer } from "react";
import AuthContext from "../../context/AuthContext";
import { Input } from "../inputs/EmailInput";
import { useNavigate } from "react-router-dom";

const MIN_LENGTH = 4;
const initialInputState = {
  isTouchedEmail: false,
  isTouchedPassword: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT_EMAIL") {
    return {
      isTouchedEmail: action.isTouched,
    };
  }
  if (action.type === "INPUT_PASSWORD") {
    return {
      isTouchedPassword: action.isTouched,
    };
  }
  return inputStateReducer;
};

export const LoginComponent = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const emailIsValid = email.length > MIN_LENGTH && email.includes("@");
  const emailInputIsInvalid = !emailIsValid && inputState.isTouchedEmail;

  const passwordIsValid = password.length > MIN_LENGTH;
  const passwordInputIsInvalid =
    !passwordIsValid && inputState.isTouchedPassword;

  const ChangeEmail = (event) => {
    setEmail(event.target.value);
    dispatch({ type: "INPUT_EMAIL", isTouched: true });
  };

  const ChangePassword = (event) => {
    setPassword(event.target.value);
    dispatch({ type: "INPUT_PASSWORD", isTouched: true });
  };

  const LoginHandler = (event) => {
    event.preventDefault();
    if (!emailIsValid || !passwordIsValid) return;
    context.logIn();
    navigate("/home");
  };

  return (
    <>
      <form>
        <div>
          <Input
            type="email"
            placeholder="Email"
            onChange={ChangeEmail}
            value={email}
            className={emailInputIsInvalid ? "inputError" : "inputOk"}
          ></Input>
        </div>
        <br />
        <div>
          <Input
            type="text"
            placeholder="Password"
            onChange={ChangePassword}
            value={password}
            className={passwordInputIsInvalid ? "inputError" : "inputOk"}
          ></Input>
        </div>
        <br />
        <button
          onClick={LoginHandler}
          disabled={!emailIsValid || !passwordIsValid}
        >
          Inicia Sesion
        </button>
      </form>
    </>
  );
};
