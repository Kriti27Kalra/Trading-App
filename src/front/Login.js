import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
const isAdminLogin = location.pathname === "/admin/login";


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);  
  
 const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const baseURL = "http://localhost:5000";
    const url = isAdminLogin
      ? `${baseURL}/api/admin/login`
      : `${baseURL}/api/login`;

    const res = await axios.post(url, { email, password });

    if (res.data.success) {
      alert("Login successful!");

      if (isAdminLogin) {
        localStorage.removeItem("user");
        localStorage.setItem("admin", JSON.stringify(res.data.admin));
        navigate("/admin/dashboard");
      } else {
        localStorage.removeItem("admin");
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/user/dashboard");
      }
    } else {
      alert(res.data.message || "Login failed");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert(err.response?.data?.message || "An error occurred while logging in.");
  } finally {
    setLoading(false);
  }
};




  return (
    <>
      <header className="login-header">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo"></div>
          </div>
        </div>
      </header>

      <section
        className="page-header bg--cover"
        style={{ backgroundImage: "url(/assets/images/header/1.png)", marginTop: "60px" , borderRadius: "0px" }}
      >
        <div className="container">
          <div className="page-header__content">
            <h2>LOGIN</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link> / <span style={{ color: "white" }}>Login</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="account padding-top padding-bottom sec-bg-color2">
        <div className="container">
          <div className="account__wrapper">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="account__content account__content--style1">
                  <div className="account__header">
                    <h2>Welcome back!</h2>
                    <p>Hey there! Ready to log in? Enter your email and password below to continue.</p>
                  </div>

                  <form className="account__form" onSubmit={handleLogin}>
                    <div className="row g-4">
                      <div className="col-12">
                        <label htmlFor="account-email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="account-email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="account-pass" className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="account-pass"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="account__check">
                      <div className="account__check-remember">
                        <input type="checkbox" className="form-check-input" id="terms-check" />
                        <label htmlFor="terms-check" className="form-check-label">Remember me</label>
                      </div>
                      <div className="account__check-forgot">
                        <Link to="/forgot-pass">Forgot Password?</Link>
                      </div>
                    </div>
                   


                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary d-block mt-4"
                      disabled={loading}  // Disable button when loading
                    >
                      {loading ? "Processing..." : "LOGIN"}  {/* Change text to indicate loading */}
                    </button>
                  </form>

                  <div className="account__switch">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="account__shape">
            <span className="account__shape-item account__shape-item--1">
              <img src="/assets/images/contact/4.png" alt="shape-icon" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
