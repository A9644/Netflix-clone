import React from "react";
import HeaderHome from "./HeaderHome";
import "./Maincss/maincss.css";
import { NavLink } from "react-router-dom";
import TabComponent from "./TabComponent";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <TabComponent />
    </>
  );
};

export default Home;
