import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const MainNavigation = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const handlerLogOut = () => {
    context.logOut();
    navigate("/login");
  };

  return (
    <header className="header">
      <h2>GameJuanma</h2>
      <nav>
        <Link to="/home" className="button-link">
          Home
        </Link>
        {!context.isLoggedIn && (
          <Link to="/login" className="button-link">
            Login
          </Link>
        )}
        {context.isLoggedIn && (
          <button onClick={handlerLogOut}>Cerrar Sesion</button>
        )}
      </nav>
    </header>
  );
};
