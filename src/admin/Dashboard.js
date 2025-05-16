import React from "react";
import Cards from "../components/Cards";





const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("admin"));
  const username = user?.name || "Admin";

  return (
    
      <div>
       
        <div className="mobile-menu-overlay" />
        <div className="main-container">
          <div className="pd-ltr-20">
            <div className="card-box pd-20 height-100-p mb-30">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img src="/vendors/images/banner-img.png" alt="" />
                </div>
                <div className="col-md-8">
                  <h4 className="font-20 weight-500 mb-10 text-capitalize">
                    Welcome back{" "} <div className="weight-600 font-30 text-blue">{username}!</div>
                  </h4>
                  <p className="font-18 max-width-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic non repellendus debitis iure, doloremque assumenda. Autem modi, corrupti, nobis ea iure fugiat, veniam non quaerat mollitia animi error corporis.</p>
                </div>
              </div>
            </div>
           <Cards/>
            
          </div></div></div>
          
    );
  }

export default AdminDashboard;