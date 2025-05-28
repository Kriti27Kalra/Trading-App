import React, { useEffect, useState } from "react";
import AdminCards from "./AdminCards";
const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("admin"));
  const username = user?.name || "Admin";

  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/admin/users`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUserCount(data.users.length);
        }
      })
      .catch(err => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div>
      <div className="mobile-menu-overlay" />
      <div className="main-container">
        <div className="pd-ltr-20">
          <div className="card-box pd-20 height-100-p mb-30">
            <div className="row align-items-center">
              <div className="col-md-4">
                <img src="/vendors/images/banner-img.png" alt="Banner" />
              </div>
              <div className="col-md-8">
                <h4 className="font-20 weight-500 mb-10 text-capitalize">
                  Welcome back{" "}
                  <div className="weight-600 font-30 text-blue">{username}!</div>
                </h4>
                <p className="font-18 max-width-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  hic non repellendus debitis iure, doloremque assumenda. Autem modi,
                  corrupti, nobis ea iure fugiat, veniam non quaerat mollitia animi error
                  corporis.
                </p>
              </div>
            </div>
          </div>

          {/* Pass userCount as a prop */}
          <AdminCards userCount={userCount} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
