import React from "react";
import { Navigate } from "react-router-dom";

const AuthProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  // Prevent admin from accessing user routes
  if (user && !admin) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default AuthProtectedRoute;
