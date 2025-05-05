import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { firstName, lastName, email, password, confirmPassword });
  };

  return (
    <>
      {/* Register-specific header */}
      <header className="login-header">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              {/* Optional: Add your logo here */}
            </div>
          </div>
        </div>
      </header>

      {/* Light-Dark Switch */}
      <div className="lightdark-switch">
        <span className="switch-btn" id="btnSwitch">
          <img src="/assets/images/icon/moon.svg" alt="light-dark-switchbtn" className="swtich-icon" />
        </span>
      </div>

      {/* Page Header */}
      <section
        className="page-header bg--cover"
        style={{ backgroundImage: 'url(/assets/images/header/1.png)', marginTop: '70px' }}
      >
        <div className="container">
          <div className="page-header__content">
            <h2>REGISTER</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link> / <span style={{ color: 'white' }}>Register</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Account Section */}
      <section className="account padding-top padding-bottom sec-bg-color2">
        <div className="container">
          <div className="account__wrapper">
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
                        <img src="/assets/images/others/google.svg" alt="google icon" />
                      </span>
                      Continue with Google
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="account__divider account__divider--style1">
                    <span>or</span>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="account__form needs-validation" noValidate>
                    <div className="row g-4">
                      <div className="col-12 col-md-6">
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

                      <div className="col-12 col-md-6">
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

                      <div className="col-12">
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

                      <div className="col-12">
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

                      <div className="col-12">
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

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary d-block mt-4"
                    >
                      REGISTER
                    </button>
                  </form>

                  {/* Switch to Login */}
                  <div className="account__switch">
                    <p>
                      Already have an account? <Link to="/login">Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Shape */}
        <div className="account__shape">
          <span className="account__shape-item account__shape-item--1">
            <img src="/assets/images/contact/4.png" alt="shape-icon" />
          </span>
        </div>
      </section>
    </>
  );
};

export default Register;
