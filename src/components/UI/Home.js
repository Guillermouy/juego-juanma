import { Link } from "react-router-dom";

export const HomeComponent = () => {
  return (
    <>
      <div>
        <h1>Welcome</h1>
        <Link to="/game-juanma" className="button-link">
          Juego Juanma
        </Link>
        <br />
        <Link className="button-link">In coming...</Link>
      </div>
    </>
  );
};
