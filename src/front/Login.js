import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="lightdark-switch">
        <span className="switch-btn" id="btnSwitch">
          <img
            src="/assets/images/icon/moon.svg"
            alt="light-dark-switchbtn"
            className="swtich-icon"
          />
        </span>
      </div>

      <header className="header-section bg-color-3">
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <Link to="/">
                  <img className="dark" src="/assets/images/logo/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="menu-area">
                <ul className="menu menu--style1">
                  <li className="megamenu">
                    <a href="#">Demos</a>
                    {/* Keeping demo previews as <a> since they are static previews */}
                    <ul className="submenu">
                      <li>
                        <div className="home-showcase">
                          <div className="row g-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                            {/* Example Demo Item */}
                            <div className="col">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img src="/assets/images/demo/1.png" alt="home-showcase" />
                                  <div className="home-showcase__buttons">
                                    <a
                                      href="/index6a08.html?theme=light"
                                      className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"
                                    >
                                      <span>Preview</span>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="home-showcase__title">
                                  <a href="/index6a08.html?theme=light">Stock Trading</a>
                                </h3>
                              </div>
                            </div>
                            {/* Repeat similar blocks for other demos */}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Services</a>
                    <ul className="submenu">
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/service-details">Services Details</Link></li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">About</a>
                    <ul className="submenu">
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/price">Price</Link></li>
                      <li><Link to="/team">Team</Link></li>
                      <li><Link to="/team-2">Team 2</Link></li>
                      <li><Link to="/team-details">Team Details</Link></li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Pages</a>
                    <ul className="submenu">
                      <li><Link to="/blogs">Blogs</Link></li>
                      <li><Link to="/blog-sidebar">Blog - Side Bar</Link></li>
                      <li><Link to="/blog-details">Blog Details</Link></li>
                      <li><Link to="/signup">Sign Up</Link></li>
                      <li><Link to="/signup-2">Sign Up 2</Link></li>
                      <li><Link to="/signin">Sign In</Link></li>
                      <li><Link to="/signin-2">Sign In 2</Link></li>
                      <li><Link to="/forgot-pass">Reset Password</Link></li>
                      <li><Link to="/forgot-pass-2">Reset Password 2</Link></li>
                      <li><Link to="/404">404 Error</Link></li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className="header-action">
                <div className="menu-area">
                  <div className="header-btn">
                    <Link to="/register" className="trk-btn trk-btn--border trk-btn--primary">
                      <span>Join Now</span>
                    </Link>
                  </div>

                  <div className="header-bar d-lg-none home1">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      <section
        className="page-header bg--cover"
        style={{ backgroundImage: "url(/assets/images/header/1.png)" }}
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
                          <button type="button" id="btnToggle" className="form-pass__toggle">
                            <i id="eyeIcon" className="fa fa-eye"></i>
                          </button>
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
