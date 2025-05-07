import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaTachometerAlt,
  FaUsers,
  FaDownload,
  FaCoins,
  FaShoppingCart,
  FaGift,
  FaPlus,
  FaUserShield,
  FaUserCog,
  FaChartLine
} from 'react-icons/fa';

const Sidebar = ({ role }) => {
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="bg-dark text-white p-3" style={{ width: '250px', minHeight: '100vh' }}>
      <h5 className="mb-4">{role === 'admin' ? 'ADMIN PANEL' : 'BISAFE'}</h5>

      <div className="d-flex align-items-center mb-3">
        <FaTachometerAlt className="me-2" />
        <span>Dashboard</span>
      </div>

      {role === 'admin' ? (
        <>
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
        </>
      ) : (
        <>
          <div className="d-flex align-items-center mb-3">
            <FaCoins className="me-2" />
            <span>Sale Reward</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <FaUsers className="me-2" />
            <span>My Team</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <FaDownload className="me-2" />
            <span>Download PDF</span>
          </div>

          <div
            className="d-flex align-items-center mb-3"
            onClick={() => setShowAI(!showAI)}
            style={{ cursor: 'pointer' }}
          >
            <FaUsers className="me-2" />
            <span>AI & RI</span>
            <span className="ms-auto">{showAI ? '▲' : '▼'}</span>
          </div>

          {showAI && (
            <div className="ms-4 mb-3">
              <div className="mb-2">Activate ID</div>
              <div className="mb-2">History</div>
              <div className="mb-2">Reactivate ID</div>
              <div className="mb-2">Reactivate History</div>
            </div>
          )}

          <div className="d-flex align-items-center mb-3">
            <FaShoppingCart className="me-2" />
            <span>Orders & Track</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <FaPlus className="me-2" />
            <span>USDT Withdraw</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <FaGift className="me-2" />
            <span>Incomes</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
