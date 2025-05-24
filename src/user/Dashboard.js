import React, { useState, useEffect } from "react";
import UserCards from "./UserCards";

const UserDashboard = () => {
  const [username, setUsername] = useState("User");

  const loadUserName = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUsername(user?.name || "User");
  };

  useEffect(() => {
    loadUserName();

    // Listen for custom userUpdated event
    const onUserUpdated = () => {
      loadUserName();
    };

    window.addEventListener("userUpdated", onUserUpdated);

    return () => {
      window.removeEventListener("userUpdated", onUserUpdated);
    };
  }, []);

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
                  Welcome back{" "}
                  <div className="weight-600 font-30 text-blue">{username}!</div>
                </h4>
                <p className="font-18 max-width-600">
                 The market never sleeps—stay sharp, trade smart, and aim higher every day.
                 Track your trades and make smart decisions with ease.


                </p>
              </div>
            </div>
          </div>
          <UserCards />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
