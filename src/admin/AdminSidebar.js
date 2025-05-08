import React from 'react';
import { FaTachometerAlt, FaUserShield, FaChartLine, FaDownload, FaUserCog } from 'react-icons/fa';

const AdminSidebar = () => {
  return (
    <div className="bg-dark text-white p-3" style={{ width: '250px', minHeight: '100vh' }}>
      <h5 className="mb-4">ADMIN PANEL</h5>

      <div className="d-flex align-items-center mb-3">
        <FaTachometerAlt className="me-2" />
        <span>Dashboard</span>
      </div>

      <div className="d-flex align-items-center mb-3">
        <FaUserShield className="me-2" />
        <span>User Management</span>
      </div>
      <div className="d-flex align-items-center mb-3">
        <FaChartLine className="me-2" />
        <span>Analytics</span>
      </div>
      <div className="d-flex align-items-center mb-3">
        <FaDownload className="me-2" />
        <span>Reports</span>
      </div>
      <div className="d-flex align-items-center mb-3">
        <FaUserCog className="me-2" />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default AdminSidebar;
