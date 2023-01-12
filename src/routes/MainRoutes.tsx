import { lazy } from "react";
import Loadable from "../components/UI/Loadable";

const Home = Loadable(lazy(() => import("../pages/CharacterHome")));
const Detail = Loadable(lazy(() => import("../pages/CharacterDetail")));

const MainRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/detail",
    element: <Detail />
  }
];

export default MainRoutes;
