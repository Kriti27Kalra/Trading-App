import React from "react";
import { Outlet, Link } from "react-router-dom";
import UserSidebar from "../user/UserSidebar";

function UserDashboardLayout() {
  return (
    <div className="d-flex">
    {/* Sidebar */}
    <UserSidebar />
    

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
