import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function UserDashboardLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow-1">
        <Outlet />
      </main>
      

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default UserDashboardLayout;
