import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Home from "../components/Home";
import { Graph } from "../components/Graph";
import Loading from "../components/Loading";
import Map from "../components/Map";
const home = () => {
  const navigate = useNavigation();
  const isPageLoading = navigate.state === "loading";
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      {isPageLoading ? <Loading /> : <Outlet />}
      <Graph />
      <Map />
    </div>
  );
};

export default home;
