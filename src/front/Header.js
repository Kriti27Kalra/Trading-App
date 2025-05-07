import React from 'react';

function Header() {
  return (
    <>
      
      {/* 
      <div classNameName="preloader">
        <img src="/assets/images/logo/preloader.png" alt="preloader icon"/>
      </div>
      */}

      
  <div className="lightdark-switch">
    <span className="switch-btn" id="btnSwitch"><img src="/assets/images/icon/moon.svg" alt="light-dark-switchbtn"
        className="swtich-icon"/></span>
  </div>





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
                <a href="#">Demos </a>
                <ul className="submenu">
                  <li>
                    <div className="home-showcase">
                      <div className="row g-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        <div className="col order-first">
                          <div className="home-showcase__item">
                            <div className="home-showcase__image">
                              <img src="/assets/images/demo/1.png" alt="home-showcase"/>
                              <div className="home-showcase__buttons">
                                <a href="index6a08.html?theme=light"
                                  className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></a>
                              </div>
                            </div>
                            <h3 className="home-showcase__title"><a href="index6a08.html?theme=light">Stock Trading</a>
                            </h3>
                          </div>
                        </div>
                        <div className="col">
                          <div className="home-showcase__item">
                            <div className="home-showcase__image">
                              <img src="/assets/images/demo/1-dark.png" alt="home-showcase"/>
                              <div className="home-showcase__buttons">
                                <a href="index4965.html?theme=dark"
                                  className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></a>
                              </div>
                            </div>
                            <h3 className="home-showcase__title"><a href="index4965.html?theme=dark">Stock Trading Dark</a>
                            </h3>
                          </div>
                        </div>
                        <div className="col">
                          <div className="home-showcase__item">
                            <div className="home-showcase__image">
                              <img src="/assets/images/demo/2.png" alt="home-showcase"/>
                              <div className="home-showcase__buttons">
                                <a href="index-26a08.html?theme=light"
                                  className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></a>
                              </div>
                            </div>
                            <h3 className="home-showcase__title"> <a href="index-26a08.html?theme=light">Crypto Trading</a>
                            </h3>
                          </div>
                        </div>
                        <div className="col">
                          <div className="home-showcase__item">
                            <div className="home-showcase__image">
                              <img src="/assets/images/demo/2-dark.png" alt="home-showcase"/>
                              <div className="home-showcase__buttons">
                                <a href="index-24965.html?theme=dark"
                                  className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></a>
                              </div>
                            </div>
                            <h3 className="home-showcase__title"> <a href="index-24965.html?theme=dark">Crypto Trading Dark</a>
                            </h3>
                          </div>
                        </div>
                        <div className="col">
                          <div className="home-showcase__item">
                            <div className="home-showcase__image">
                              <img src="/assets/images/demo/3.png" alt="home-showcase"/>
                              <div className="home-showcase__buttons">
                                <a href="index-36a08.html?theme=light"
                                  className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></a>
                              </div>
                            </div>
                            <h3 className="home-showcase__title"><a href="index-36a08.html?theme=light">Forex Trading</a>
                            </h3>
                          </div>
                        </div>
                        <div className="col">
                          <div className="home-showcase__item">
                            <div className="home-showcase__image">
                              <img src="/assets/images/demo/3-dark.png" alt="home-showcase"/>
                              <div className="home-showcase__buttons">
                                <a href="index-34965.html?theme=dark"
                                  className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></a>
                              </div>
                            </div>
                            <h3 className="home-showcase__title"><a href="index-34965.html?theme=dark">Forex Trading Dark</a>
                            </h3>
                          </div>
                        </div>
                        <div className="col">
                          <div className="home-showcase__item">
                            <div className="home-showcase__image">
                              <img src="/assets/images/demo/4.png" alt="home-showcase"/>
                              <div className="home-showcase__badge">
                                <span>New</span>
                              </div>
                              <div className="home-showcase__buttons">
                                <a href="index-46a08.html?theme=light"
                                  className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></a>
                              </div>
                            </div>
                            <h3 className="home-showcase__title"><a href="index-46a08.html?theme=light">Day Trading</a>
                            </h3>
                          </div>
                        </div>
                        <div className="col">
                          <div className="home-showcase__item">
                            <div className="home-showcase__image">
                              <img src="/assets/images/demo/4-dark.png" alt="home-showcase"/>
                              <div className="home-showcase__badge">
                                <span>New</span>
                              </div>
                              <div className="home-showcase__buttons">
                                <a href="index-44965.html?theme=dark"
                                  className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></a>
                              </div>
                            </div>
                            <h3 className="home-showcase__title"><a href="index-44965.html?theme=dark">Day Trading Dark</a>
                            </h3>
                          </div>
                        </div>
                        <div className="col">
                          <div className="home-showcase__item">
                            <div className="home-showcase__image">
                              <img src="/assets/images/demo/5.png" alt="home-showcase"/>
                              <div className="home-showcase__badge">
                                <span>New</span>
                              </div>
                              <div className="home-showcase__buttons">
                                <a href="index-56a08.html?theme=light"
                                  className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></a>
                              </div>
                            </div>
                            <h3 className="home-showcase__title"><a href="index-56a08.html?theme=light">Trading Platform</a>
                            </h3>
                          </div>
                        </div>
                        <div className="col">
                          <div className="home-showcase__item">
                            <div className="home-showcase__image">
                              <img src="/assets/images/demo/5-dark.png" alt="home-showcase"/>
                              <div className="home-showcase__badge">
                                <span>New</span>
                              </div>
                              <div className="home-showcase__buttons">
                                <a href="index-54965.html?theme=dark"
                                  className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"><span>Preview</span></a>
                              </div>
                            </div>
                            <h3 className="home-showcase__title"><a href="index-54965.html?theme=dark">Trading Platform Dark</a>
                            </h3>
                          </div>
                        </div>
                        <div className="col order-last">
                          <div className="home-showcase__item">
                            <div className="home-showcase__image">
                              <img src="/assets/images/demo/new.png" alt="home-showcase"/>
                            </div>
                            <h3 className="home-showcase__title"> <a href="#">New Demos</a>
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
                <a href="signup.html" className="trk-btn trk-btn--border trk-btn--primary ">
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