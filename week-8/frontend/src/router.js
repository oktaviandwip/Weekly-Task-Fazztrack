import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Movies from "./pages/movies";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/sign-in.html",
    element: <SignIn />,
  },

  {
    path: "/sign-up.html",
    element: <SignUp />,
  },

  {
    path: "/movies.html",
    element: <Movies />,
  },
]);
