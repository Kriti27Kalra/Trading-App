import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const user = JSON.parse(localStorage.getItem("user"));

  // Prevent users from accessing admin routes
  if (admin && !user) {
    return children;
  }

  return <Navigate to="/admin/login" replace />;
};

export default AdminProtectedRoute;
