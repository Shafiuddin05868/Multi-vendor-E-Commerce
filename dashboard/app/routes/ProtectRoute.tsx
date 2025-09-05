import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router";

const ProtectRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = true;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]);

  return <Outlet />;
};

export default ProtectRoute;
