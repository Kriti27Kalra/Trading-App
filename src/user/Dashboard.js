import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <>
      <div className="mobile-menu-overlay"></div>

      <div className="main-container" style={{ padding: "30px", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
        <div className="pd-ltr-20">
          {/* Welcome Section */}
          <div className="card-box pd-20 mb-4" style={welcomeCardStyle}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img
                    src="/assets/images/banner/banner-img.png"
                    alt="Banner"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-2 text-capitalize">Welcome back,</h4>
                  <h2 className="text-primary">{user ? user.name : "User"}!</h2>
                  <p className="text-muted">
                    Glad to see you again. Monitor your referrals, activity, and earnings all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="row g-4">
            <StatCard title="My Referrals" value="5" color="info" />
            <StatCard title="Account Status" value="Active" color="success" />
            <StatCard title="Wallet Balance" value="$1200" color="warning" />
            <StatCard title="Trading Activity" value="14 Trades" color="primary" />
          </div>

          {/* Recent Activity Table */}
          <div className="card-box mt-5 p-4 bg-white rounded shadow-sm">
            <h5 className="mb-4 text-dark">Recent Activity</h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025-05-10</td>
                  <td>Referral bonus credited</td>
                  <td><span className="badge bg-success">Completed</span></td>
                </tr>
                <tr>
                  <td>2025-05-08</td>
                  <td>Joined trading pool</td>
                  <td><span className="badge bg-info">In Progress</span></td>
                </tr>
                <tr>
                  <td>2025-05-05</td>
                  <td>Account updated</td>
                  <td><span className="badge bg-warning">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

// StatCard Component
const StatCard = ({ title, value, color }) => {
  return (
    <div className="col-md-6 col-xl-3">
      <div className={`card-box p-4 bg-${color} text-white rounded shadow`}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="mb-0">{value}</h4>
            <small>{title}</small>
          </div>
          <i className="bi bi-bar-chart-line fs-2"></i>
        </div>
      </div>
    </div>
  );
};

// Style for Welcome Card
const welcomeCardStyle = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  padding: "30px"
};

export default UserDashboard;
