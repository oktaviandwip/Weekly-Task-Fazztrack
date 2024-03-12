import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Movies from "./pages/movies";
import Spiderman from "./pages/spiderman";
import Dashboard from "./pages/dashboard";
import AdminMovies from "./pages/admin-movies";

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

  {
    path: "/spiderman-homecoming.html",
    element: <Spiderman />,
  },

  {
    path: "/admin/dashboard.html",
    element: <Dashboard />,
  },

  {
    path: "/admin/movies.html",
    element: <AdminMovies />,
  },
]);
