import { useContext } from "react";
import "./App.css";
import { HomeComponent } from "./components/UI/Home";
import { LoginComponent } from "./components/UI/Login";
import AuthContext from "./context/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GameJuanma } from "./components/UI/GameJuanma";
import RootLayout from "./components/Root";
import { ErrorPage } from "./components/UI/ErrorPage";
import { UserDetail } from "./components/users/UserDetail";
import { UsersList } from "./components/UI/UsersList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "home", element: <HomeComponent /> },
      { path: "login", element: <LoginComponent /> },
      { path: "game-juanma", element: <GameJuanma /> },
      { path: "users", element: <UsersList /> },
      { path: "users/:idUser", element: <UserDetail /> },

      { path: "*", element: <HomeComponent /> },
    ],
  },
]);

function App() {
  const context = useContext(AuthContext);

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
        {/* <MainNavigation />
        {context.isLoggedIn && <RouterProvider router={router} />}
        {!context.isLoggedIn && <LoginComponent />} */}
      </header>
    </div>
  );
}

export default App;
