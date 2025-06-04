import React from 'react';

function Header() {
  return (
    <>
      
      {/* 
      <div classNameName="preloader">
        <img src="/assets/images/logo/preloader.png" alt="preloader icon"/>
      </div>
      */}

      
 




  <header className="header-section header-section--style2">
    <div className="header-bottom">
      <div className="container-fluid">
        <div className="header-wrapper">
          <div className="logo">
            <a href="index-2.html">
              <img className="dark" src="/assets/images/logo/logo.png" alt="logo"/>
            </a>
          </div>
          <div className="menu-area">
            <ul className="menu menu--style1">
              <li className="megamenu">
                <a href="#">Home </a>
                
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
                  <li><a href="blogs.html">Blogs</a></li>
                  <li><a href="blog-sidebar.html">Blog - Side Bar</a></li>
                  <li><a href="blog-details.html">Blog Details</a></li>
                  <li><a href="signup.html">Sign Up</a></li>
                  <li><a href="signup-2.html">Sign Up 2</a></li>
                  <li><a href="signin.html">Sign In</a></li>
                  <li><a href="signin-2.html">Sign In 2</a></li>
                  <li><a href="forgot-pass.html">Reset Password</a></li>
                  <li><a href="forgot-pass-2.html">Reset Password 2</a></li>
                  <li><a href="404.html">404 Error</a></li>
                </ul>

              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>

          </div>
          <div className="header-action">
            <div className="menu-area">
              <div className="header-btn">
                <a href="/register" className="trk-btn trk-btn--border trk-btn--primary ">
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
    </div>
  </header>




    </>
  );
}

export default Header;