import React from "react";
import { Outlet } from "react-router-dom";
import Foter from "../components/Footer/Foter";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Foter />
    </div>
  );
};

export default Main;
