import React from "react";
import { Home } from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Nav/NavBar";

export const RouteData = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
