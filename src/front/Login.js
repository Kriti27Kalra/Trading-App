import React from "react";
import { Link } from "react-router-dom";  // Import Link component

function Login() {
  return (
    <>
      {/* Login-specific header */}
      <header className="login-header">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              {/* Removed the Link component around the logo */}
              
            </div>
          </div>
        </div>
      </header>

      <section
        className="page-header bg--cover"
        style={{ backgroundImage: "url(/assets/images/header/1.png)", marginTop: "70px" 

        }}
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
          <div className="page-header__shape">
            <span className="page-header__shape-item page-header__shape-item--1">
              <img src="/assets/images/header/2.png" alt="shape-icon" />
            </span>
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
                    <p>Hey there! Ready to log in? Just enter your username and password below and you'll be back in action in no time. Let's go!</p>
                  </div>

                  <div className="account__social">
                    <a href="#" className="account__social-btn">
                      <span><img src="/assets/images/others/google.svg" alt="google icon" /></span>
                      Continue with Google
                    </a>
                  </div>

                  <div className="account__divider account__divider--style1">
                    <span>or</span>
                  </div>

                  <form className="account__form needs-validation" noValidate>
                    <div className="row g-4">
                      <div className="col-12">
                        <label htmlFor="account-email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="account-email" placeholder="Enter your email" required />
                      </div>
                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">Password</label>
                          <input type="password" className="form-control showhide-pass" id="account-pass" placeholder="Password" required />
                          
                        </div>
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

                    <button type="submit" className="trk-btn trk-btn--border trk-btn--primary d-block mt-4">LOGIN</button>
                  </form>

                  <div className="account__switch">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                  </div>
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
      </section>
    </>
  );
}

export default Login;
