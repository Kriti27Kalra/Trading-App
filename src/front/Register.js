import React, { useState } from 'react';
import { Link } from "react-router-dom"; 

const Register = () => {
  // State hooks for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted', { firstName, lastName, email, password, confirmPassword });
  };

  return (
    <div>
      {/* Light-Dark Switch */}
      <div className="lightdark-switch">
        <span className="switch-btn" id="btnSwitch">
          <img src="assets/images/icon/moon.svg" alt="light-dark-switchbtn" className="swtich-icon" />
        </span>
      </div>

      {/* Header Section */}
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
    

      {/* Page Header */}
      <section className="page-header bg--cover" style={{ backgroundImage: 'url(assets/images/header/1.png)' }}>
        <div className="container">
          <div className="page-header__content" data-aos="fade-right" data-aos-duration="1000">
            <h2>REGISTER</h2>
            <nav style={{ '--bs-breadcrumb-divider': '/' }} aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
        <Link to="/">Home</Link> / <span style={{ color: "white" }}>Register</span>
                </li>

                  
                
                
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Account Section */}
      <section className="account padding-top padding-bottom sec-bg-color2">
        <div className="container">
          <div className="account__wrapper" data-aos="fade-up" data-aos-duration="800">
            <div className="row g-4">
              <div className="col-12">
                <div className="account__content account__content--style1">
                  {/* Account Header */}
                  <div className="account__header">
                    <h2>Create Your Account</h2>
                    <p>
                      Hey there! Ready to join the party? We just need a few details from you to get started.
                      Let's do this!
                    </p>
                  </div>

                  {/* Social Login */}
                  <div className="account__social">
                    <a href="#" className="account__social-btn">
                      <span>
                        <img src="assets/images/others/google.svg" alt="google icon" />
                      </span>
                      Continue with google
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="account__divider account__divider--style1">
                    <span>or</span>
                  </div>

                  {/* Registration Form */}
                  <form onSubmit={handleSubmit} className="account__form needs-validation" noValidate>
                    <div className="row g-4">
                      <div className="col-12 col-md-6">
                        <div>
                          <label htmlFor="first-name" className="form-label">
                            First name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="first-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Ex. Jhon"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div>
                          <label htmlFor="last-name" className="form-label">
                            Last name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="last-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Ex. Doe"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div>
                          <label htmlFor="account-email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="account-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-pass" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control showhide-pass"
                            id="account-pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-pass">
                          <label htmlFor="account-cpass" className="form-label">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control showhide-pass"
                            id="account-cpass"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Re-type password"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="trk-btn trk-btn--border trk-btn--primary d-block mt-4">
                      REGISTER
                    </button>
                  </form>

                  {/* Switch to Login */}
                  <div className="account__switch">
                    <p>
                      Don’t have an account yet? <a href="./Login">Login</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
