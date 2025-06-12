import React, { useState, useEffect } from "react";
import UserCards from "./UserCards";
import { FaRegCopy } from "react-icons/fa"; 
import { useParams } from "react-router-dom";
import axios from "axios"; // or fetch, based on your setup

const UserDashboard = () => {
  const { userId } = useParams();  // Get userId from URL
  const [username, setUsername] = useState("User");
  const [referCode, setReferCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      // Fetch user data by userId
      axios.get(`http://localhost:5000/api/users/${userId}`)
        .then(res => {
          const user = res.data;
          setUsername(user.name || "User");
          setReferCode(user.refer_code || "N/A");
          setLoading(false);
        })
        .catch(err => {
          console.error("Failed to load user data", err);
          setLoading(false);
        });
    } else {
      // fallback: load from localStorage if no userId param
      const user = JSON.parse(localStorage.getItem("user"));
      setUsername(user?.name || "User");
      setReferCode(user?.refer_code || "N/A");
      setLoading(false);
    }
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {/* your existing JSX */}
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

                <div className="font-18 max-width-600 mb-2 d-flex align-items-center">
                  ID_<strong className="text-primary mr-2">{referCode}</strong>
                  <button
                    className="btn btn-sm btn-light border rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "28px",
                      height: "28px",
                      padding: "0",
                      fontSize: "14px",
                    }}
                    title="Copy USER_ID"
                    onClick={() => {
                      navigator.clipboard.writeText(referCode);
                      alert("USER_ID copied!");
                    }}
                  >
                    <FaRegCopy />
                  </button>
                </div>

                <p className="font-18 max-width-600">
                  The market never sleeps—stay sharp, trade smart, and aim higher every day.
                  Track your trades and make smart decisions with ease.
                </p>
              </div>
            </div>
          </div>
          <UserCards userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
