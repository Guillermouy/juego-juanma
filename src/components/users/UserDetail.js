import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const UserDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Usuario:</h1>
      <h2>{params.idUser}</h2>
      <div>
        <Link to=".." className="button-link">
          Back
        </Link>
      </div>
    </>
  );
};
