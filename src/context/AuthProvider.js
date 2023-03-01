import { useState } from "react";
import AuthContext from "./AuthContext";

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOutHandler = () => {
    setIsLoggedIn(false);
  };

  const logInHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        logOut: logOutHandler,
        logIn: logInHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
