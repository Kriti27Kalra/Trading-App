import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const AdminDashboardLayout = () => {
  const location = useLocation();

  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <aside className="sidebar bg-dark text-light p-3 col-md-3 col-lg-2 d-flex flex-column fixed-left">
        <h4 className="text-left mb-4 text-white">Admin Panel</h4> {/* White text for Admin Panel */}
        <nav className="nav flex-column">
          <Link
            to="/admin/dashboard"
            className={`nav-link ${location.pathname === "/admin/dashboard" ? "active" : ""}`}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/users"
            className={`nav-link ${location.pathname === "/admin/users" ? "active" : ""}`}
          >
            Manage Users
          </Link>
          <Link
            to="/admin/reports"
            className={`nav-link ${location.pathname === "/admin/reports" ? "active" : ""}`}
          >
            Reports
          </Link>
          <Link
            to="/admin/settings"
            className={`nav-link ${location.pathname === "/admin/settings" ? "active" : ""}`}
          >
            Settings
          </Link>
          <Link to="/logout" className="nav-link text-danger mt-3">
            Logout
          </Link>
        </nav>
      </aside>

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
