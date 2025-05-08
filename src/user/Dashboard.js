import React, { useEffect, useState } from "react";

function UserDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4">
        {user ? `Welcome back, ${user.name}!` : "Welcome Back!"}
      </h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">My Referrals</h5>
              <p className="card-text display-6">5</p> {/* Update dynamically if needed */}
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
}

export default UserDashboard;
