import { lazy } from "react";
const screens = {
  Home: lazy(() => import("./home")),
  CardList: lazy(() => import("./cardList")),

  // Add more screen imports as needed
};

export default screens;
