import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>ohh!</h3>
          <p>We cannot find page Which you are looking for</p>
          <Link to={"/"} className="btn btn-secondary">
            Back to home
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>SomeThing went wrong !</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
