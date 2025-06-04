import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
  
  
    return (
      

      <div className="left-side-bar">
        <div className="brand-logo">
          <a href="/user/dashboard">
            <img src="/vendors/images/deskapp-logo.svg" alt="" className="dark-logo" />
            <img src="/vendors/images/deskapp-logo-white.svg" alt="" className="light-logo" />
          </a>
          <div className="close-sidebar" data-toggle="left-sidebar-close">
            <i className="ion-close-round" />
          </div>
        </div>
        <div className="menu-block customscroll">
          <div className="sidebar-menu">
            <ul id="accordion-menu">
              <li>
                <a href="#" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-house-1" /><span className="mtext">Dashboard</span>
                </a>
               
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle">
                  <span className="micon dw dw-edit2" /><span className="mtext">Profile</span>
                </a>
                <ul className="submenu">
                  <li><a href="/user/editform">Edit Profile</a></li>

                  <li><a href="#">Change Password</a></li>
                 
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle">
                  <span className="micon dw dw-library" /><span className="mtext">Team</span>
                </a>
                <ul className="submenu">
                  <li><a href="/user/teamtable">First Level Team</a></li>

                </ul>
              </li>
              <li>
                <a href="/user/wallethistory" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-wallet" /><span className="mtext">Wallet History</span>
                </a>
              </li>
             

             
              
             
              <li className="dropdown">
                <a href="#" className="dropdown-toggle">
                  <span className="micon dw dw-analytics-21" /><span className="mtext">Charts</span>
                </a>
                <ul className="submenu">
                  <li><a href="#">Highchart</a></li>
                  <li><a href="#">jQuery Knob</a></li>
                  <li><a href="#">jvectormap</a></li>
                  <li><a href="#">Apexcharts</a></li>
                </ul>
              </li>
             
             
             
             
              <li>
                <a href="#" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-chat3" /><span className="mtext">Chat</span>
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-invoice" /><span className="mtext">Invoice</span>
                </a>
              </li>
            </ul></div></div></div>
           
    );
  }
  

export default UserSidebar;
