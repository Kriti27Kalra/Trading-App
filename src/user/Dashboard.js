import React, { useState, useEffect } from "react";
import UserCards from "./UserCards";
import { FaRegCopy } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDashboard = () => {
  const { userId: routeUserId } = useParams(); // param from URL
  const [username, setUsername] = useState("User");
  const [referCode, setReferCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log("Stored user from localStorage:", storedUser);
  console.log("routeUserId from URL:", routeUserId);

  if (storedUser) {
    setUsername(storedUser.name || "User");
    setReferCode(storedUser.refer_code || "N/A");
    setLoading(false);
  } else if (routeUserId) {
    axios.get(`${process.env.REACT_APP_API_URL}/users/${routeUserId}`)
      .then(res => {
        console.log("Fetched user data:", res.data); // debug log
        const user = res.data.user || res.data;
        setUsername(user.first_name + " " + user.last_name || "User");
        setReferCode(user.refer_code || "N/A");
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load user data", err);
        setLoading(false);
      });
  } else {
    console.log("No local user or route param");
    setLoading(false);
  }
}, [routeUserId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="mobile-menu-overlay" />
      <div className="main-container">
        <div className="pd-ltr-20">
          <div className="card-box pd-20 height-100-p mb-30">
            <div className="row align-items-center">
              <div className="col-md-4">
                <img src="/vendors/images/banner-img.png" alt="banner" />
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
          <UserCards referCode={referCode} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
