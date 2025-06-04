import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
 

  
  
    return (
      

      <div className="left-side-bar">
        <div className="brand-logo">
          <a href="/admin/dashboard">
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
              

              <li className="dropdown">
                <a href="#" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-house-1" /><span className="mtext">Home</span>
                </a>
                
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle">
                  <span className="micon dw dw-group" /><span className="mtext">Users</span>
                </a>
                <ul className="submenu">
                  <li><a href="/admin/userslist">All Users</a></li>

                  <li><a href="#">Active Users</a></li>
                  <li><a href="#">Inactive Users</a></li>
                  
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle">
                  <span className="micon dw dw-wallet" /><span className="mtext">Wallet</span>
                </a>
                <ul className="submenu">
                  <li><a href="/admin/wallet">Wallet Add</a></li>
                  <li><a href="/admin/wallet">Wallet Subtract</a></li>
                  <li><a href="/admin/wallet-history">Wallet History</a></li>


                </ul>
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
  

export default AdminSidebar;
