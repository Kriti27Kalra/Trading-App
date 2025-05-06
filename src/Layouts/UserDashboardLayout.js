import React from "react";
import { Outlet, Link } from "react-router-dom";


function UserDashboardLayout() {
  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4 className="mb-4 text-left mb-4 text-white">User Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/user/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/user/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/user/settings">Settings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/logout">Logout</Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow-1">
        {/* Header */}
        <div className="bg-light p-3 border-bottom">
          <h5>User Dashboard</h5>
        </div>

        {/* Outlet for nested routes */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserDashboardLayout;
