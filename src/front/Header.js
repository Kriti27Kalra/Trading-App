import React from 'react';

function Header() {
  return (
    <>
      
      {/* 
      <div className="preloader">
        <img src="assets/images/logo/preloader.png" alt="preloader icon"/>
      </div>
      */}

      
      <div className="lightdark-switch">
        <span className="switch-btn" id="btnSwitch">
          <img src="/assets/images/icon/moon.svg" alt="light-dark-switchbtn" className="swtich-icon" />
        </span>
      </div>

      
      <header className="header-section header-section--style2">
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              
              <div className="logo">
                <a href="index-2.html">
                  <img className="dark" src="/assets/images/logo/logo.png" alt="logo" />
                </a>
              </div>

              <div className="menu-area">
                <ul className="menu menu--style1">
                  <li className="megamenu">
                    <a href="#">Demos</a>
                    <ul className="submenu">
                      <li>
                        <div className="home-showcase">
                          <div className="row g-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                            <div className="col">
                              <div className="home-showcase__item">
                                <div className="home-showcase__image">
                                  <img src="/assets/images/demo/1.png" alt="home-showcase" />
                                  <div className="home-showcase__buttons">
                                    <a href="index6a08.html?theme=light" className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3">
                                      <span>Preview</span>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="home-showcase__title">
                                  <a href="index6a08.html?theme=light">Stock Trading</a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Services</a>
                    <ul className="submenu">
                      <li><a href="services.html">Services</a></li>
                      <li><a href="service-details.html">Services Details</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">About</a>
                    <ul className="submenu">
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="price.html">Price</a></li>
                      <li><a href="team.html">Team</a></li>
                      <li><a href="team-2.html">Team 2</a></li>
                      <li><a href="team-details.html">Team Details</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="submenu">
                      <li><a href="signup.html">Sign Up</a></li>
                      <li><a href="signin.html">Sign In</a></li>
                      <li><a href="forgot-pass.html">Reset Password</a></li>
                      <li><a href="404.html">404 Error</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </div>

              <div className="header-action">
                <div className="header-btn">
                  <a href="signup.html" className="trk-btn trk-btn--border trk-btn--primary">
                    <span>Join Now</span>
                  </a>
                </div>
                <div className="header-bar d-lg-none header-bar--style1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
