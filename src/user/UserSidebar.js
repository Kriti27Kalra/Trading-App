import React, { useState } from 'react';
import './UserSidebar.css';

const UserSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isIncomeOpen, setIsIncomeOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const handleLogout = () => {
    // Clear user data from localStorage or cookies (if used)
    localStorage.removeItem('user'); // or any other user data key
    // Redirect to login page (you can modify this based on your routing setup)
    window.location.href = '/login'; // assuming you have a login page route
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const toggleProfile = () => {
    setIsProfileOpen(prev => !prev);
  };

  const toggleTeam = () => {
    setIsTeamOpen(prev => !prev);
  };

  const toggleIncome = () => {
    setIsIncomeOpen(prev => !prev);
  };

  const toggleWithdraw = () => {
    setIsWithdrawOpen(prev => !prev);
  };

  return (
    <>
      <button className="burger-menu" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`user-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div>
          <button className="close-btn" onClick={toggleSidebar}>&times;</button>
        </div>

        <ul className="sidebar-menu">
          <li className="dropdown" onClick={toggleProfile}>
            <a href="#profile">
              Profile <span><i className={`fas ${isProfileOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></span>
            </a>
            {isProfileOpen && (
              <ul className="submenu">
                <li><a href="#edit-profile">Edit Profile</a></li>
                <li><a href="#change-password">Change Password</a></li>
              </ul>
            )}
          </li>

          <li className="dropdown" onClick={toggleTeam}>
            <a href="#team">
              Team <span><i className={`fas ${isTeamOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></span>
            </a>
            {isTeamOpen && (
              <ul className="submenu">
                <li><a href="#direct-team">Direct Team</a></li>
                <li><a href="#all-team">All Team</a></li>
              </ul>
            )}
          </li>

          <li className="dropdown" onClick={toggleIncome}>
            <a href="#income">
              Income <span><i className={`fas ${isIncomeOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></span>
            </a>
            {isIncomeOpen && (
              <ul className="submenu">
                <li><a href="#referral-income">Referral Income</a></li>
              </ul>
            )}
          </li>

          <li className="dropdown" onClick={toggleWithdraw}>
            <a href="#withdraw">
              Withdraw <span><i className={`fas ${isWithdrawOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></span>
            </a>
            {isWithdrawOpen && (
              <ul className="submenu">
                <li><a href="#withdraw">Withdraw</a></li>
                <li><a href="#withdraw-history">Withdraw History</a></li>
              </ul>
            )}
          </li>

          <li className="dropdown">
            <a href="#support">Support</a>
          </li>
          {/* Logout Button */}
          <li className="logout">
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserSidebar;
