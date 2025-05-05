import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top footer__top--style1">
            <div className="row gy-5 gx-4">
              <div className="col-md-6">
                <div className="footer__about">
                  <a href="index-2.html" className="footer__about-logo">
                    <img src="/assets/images/logo/logo-dark.png" alt="Logo" />
                  </a>
                  <p className="footer__about-moto">
                    Welcome to our trading site! We offer the best, most affordable products and services around. Shop now and start finding great deals!
                  </p>
                  <div className="footer__app">
                    <div className="footer__app-item footer__app-item--apple">
                      <div className="footer__app-inner">
                        <div className="footer__app-thumb">
                          <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="stretched-link">
                            <img src="/assets/images/footer/apple.png" alt="apple-icon" />
                          </a>
                        </div>
                        <div className="footer__app-content">
                          <span>Download on the</span>
                          <p className="mb-0">App Store</p>
                        </div>
                      </div>
                    </div>
                    <div className="footer__app-item footer__app-item--playstore">
                      <div className="footer__app-inner">
                        <div className="footer__app-thumb">
                          <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="stretched-link">
                            <img src="/assets/images/footer/play.png" alt="playstore-icon" />
                          </a>
                        </div>
                        <div className="footer__app-content">
                          <span>GET IT ON</span>
                          <p className="mb-0">Google Play</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

        
              <div className="col-md-2 col-sm-4 col-6">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h6>Quick links</h6>
                  </div>
                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      <li className="footer__linklist-item"><a href="about.html">About Us</a></li>
                      <li className="footer__linklist-item"><a href="team.html">Teams</a></li>
                      <li className="footer__linklist-item"><a href="service.html">Services</a></li>
                      <li className="footer__linklist-item"><a href="#">Features</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              
              <div className="col-md-2 col-sm-4 col-6">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h6>Support</h6>
                  </div>
                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      <li className="footer__linklist-item"><a href="#">Terms & Conditions</a></li>
                      <li className="footer__linklist-item"><a href="#">Privacy Policy</a></li>
                      <li className="footer__linklist-item"><a href="#">FAQs</a></li>
                      <li className="footer__linklist-item"><a href="#">Support Center</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              
              <div className="col-md-2 col-sm-4">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h6>Company</h6>
                  </div>
                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      <li className="footer__linklist-item"><a href="#">Careers</a></li>
                      <li className="footer__linklist-item"><a href="#">Updates</a></li>
                      <li className="footer__linklist-item"><a href="#">Job</a></li>
                      <li className="footer__linklist-item"><a href="#">Announce</a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__end">
              <div className="footer__end-copyright">
                <p className="mb-0">
                  © 2024 All Rights Reserved By{' '}
                  <a href="https://themeforest.net/user/thetork/portfolio" target="_blank" rel="noreferrer">Thetork</a>
                </p>
              </div>
              <div>
                <ul className="social">
                  <li className="social__item"><a href="#" className="social__link social__link--style22"><i className="fab fa-facebook-f"></i></a></li>
                  <li className="social__item"><a href="#" className="social__link social__link--style22"><i className="fab fa-instagram"></i></a></li>
                  <li className="social__item"><a href="#" className="social__link social__link--style22"><i className="fab fa-linkedin-in"></i></a></li>
                  <li className="social__item"><a href="#" className="social__link social__link--style22"><i className="fab fa-youtube"></i></a></li>
                  <li className="social__item"><a href="#" className="social__link social__link--style22"><i className="fab fa-twitter"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="footer__shape">
        <span className="footer__shape-item footer__shape-item--1">
          <img src="/assets/images/footer/1.png" alt="shape icon" />
        </span>
        <span className="footer__shape-item footer__shape-item--2"><span></span></span>
      </div>
    </footer>
  );
}

export default Footer;
