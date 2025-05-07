import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminDashboardLayout = () => {
  const location = useLocation();

  return (
    <div className="d-flex">
    {/* Sidebar */}
    <Sidebar role="admin" /> 

      {/* Main Content Area */}
      <div className="main-content flex-grow-1 d-flex flex-column">
        {/* Topbar */}
        <header className="topbar bg-light p-3 shadow-sm sticky-top">
          <h5 className="mb-0">Admin Dashboard</h5>
        </header>

        {/* Page Content */}
        <div className="content-area p-4 flex-grow-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
