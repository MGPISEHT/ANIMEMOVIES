
import Login from "./Auth/Login";
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";
import HomePage from "./Pages/Home";
import AnimePages from "./Pages/AnimePages";
import MoviePage from "./Pages/MoviePage";
import SeriesPage from "./Pages/SeriesPage";
import ChinaSeriesPage from "./Pages/ChinaSeriesPage";
import TopIMDBPage from "./Pages/TopIMDBPage";
import RoutLayout from "./Layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "anime",
        element: <AnimePages />,
      },
      {
        path: "movie",
        element: <MoviePage />,
      },
      {
        path: "series",
        element: <SeriesPage />,
      },
      {
        path: "china-series",
        element: <ChinaSeriesPage />,
      },
      {
        path: "top-IMDB",
        element: <TopIMDBPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;
