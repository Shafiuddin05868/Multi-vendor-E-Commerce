import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectRoute = () => {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }
  return <Outlet />;
};

export default ProtectRoute;
