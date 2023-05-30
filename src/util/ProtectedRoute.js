import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { selectIsAuth } from "../redux/slices/auth";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const userToken = localStorage.getItem("token");
  const checkAuth = () => {
    if (!isAuth && (!userToken || userToken === "undefined")) {
      return navigate("/login");
    }
  };
  useEffect(() => {
    checkAuth();
  }, [isAuth]);
  return (
    <React.Fragment>
      {isAuth || (userToken && userToken != "undefined")
        ? props.children
        : null}
    </React.Fragment>
  );
};
export default ProtectedRoute;
