import React from "react";
import { Outlet, useNavigation } from "react-router";

import Loading from "../components/Loading";

const home = () => {
  const navigate = useNavigation();
  const isPageLoading = navigate.state === "loading";
  return (
    <div>
      {isPageLoading ? (
        <Loading />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default home;
