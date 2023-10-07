import React, { lazy } from "react";
const screens = {
  Home: lazy(() => import("./home")),
  // Add more screen imports as needed
};

export default screens;
