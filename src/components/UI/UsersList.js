import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/users");

      if (!response.ok) {
        setError("Fetching users failed.");
      } else {
        const resData = await response.json();
        setFetchedUsers(resData.data);
      }
      setIsLoading(false);
    }
  });

  return (
    <>
      <h1>Usuarios:</h1>
      <ul>
        {fetchedUsers.map((user) => {
          <li>{user}</li>;
        })}
        <li>
          <Link to="/users/user-1">user-1</Link>
        </li>
        <li>
          <Link to="/users/user-2">user-2</Link>
        </li>
        <li>
          <Link to="/users/user-3">user-3</Link>
        </li>
      </ul>
    </>
  );
};
