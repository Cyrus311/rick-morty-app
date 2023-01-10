import { lazy } from "react";
import Loadable from "../components/UI/Loadable";

const Home = Loadable(lazy(() => import("../pages/CharacterHome")));

const MainRoutes = {
  path: "",
  element: <Home />
};

export default MainRoutes;
