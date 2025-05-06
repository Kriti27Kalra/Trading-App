import React from "react";

const UserDashboard = () => {
  return (
    <div>
      <h2 className="mb-4">Welcome Back!</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">My Referrals</h5>
              <p className="card-text display-6">5</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Account Status</h5>
              <p className="card-text text-success fs-4">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
