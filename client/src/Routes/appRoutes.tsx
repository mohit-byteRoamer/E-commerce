// AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import { SignIn } from "../features/auth/components/SignIn";
import SignUp from "../features/auth/components/signUp";
import Screen from "../Screens";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Screen.Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
