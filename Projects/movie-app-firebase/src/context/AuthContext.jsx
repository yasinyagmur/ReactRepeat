import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthContextProvider = () => {
  const currentUser = true;

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthContextProvider;
