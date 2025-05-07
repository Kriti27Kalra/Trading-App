import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Home() {
  const navigate = useNavigate(); 

  return (
    <div className="overflow-hidden">
      <section className="banner banner--style1">
        <div className="banner__bg">
          <div className="banner__bg-element">
            <img src="/assets/images/banner/home1/bg.png" alt="section-bg-element" className="dark d-none d-lg-block" />
            <span className="bg-color d-lg-none"></span>
          </div>
        </div>

        <div className="container">
          <div className="banner__wrapper">
            <div className="row gy-5 gx-4">
              <div className="col-lg-6 col-md-7">
                <div
                  className="banner__content ps-lg-5 ms-lg-4 text-wrap overflow-hidden"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="banner__content-coin">
                    <img src="/assets/images/banner/home1/3.png" alt="coin icon" />
                  </div>

                  <h1 className="banner__content-heading display-5 fw-bold">
                    Invest your money with <span>higher return</span>
                  </h1>

                  <p className="banner__content-moto fs-6">
                    Anyone can invest money to different currency to increase their earnings
                    by the help of Bitrader through online.
                  </p>

                  <div className="banner__btn-group btn-group mt-4">
                    <button
                      onClick={() => navigate('/register')}
                      className="trk-btn trk-btn--primary trk-btn--arrow"
                    >
                      REGISTER <span><i className="fa-solid fa-arrow-right"></i></span>
                    </button>

                    <button
                      onClick={() => navigate('/login')}
                      className="trk-btn trk-btn--outline22"
                    >
                      LOGIN
                    </button>
                  </div>

                  <div className="banner__content-social mt-4">
                    <p>Follow Us</p>
                    <ul className="social">
                      <li className="social__item">
                        <a href="#" className="social__link social__link--style1 active"><i className="fab fa-facebook-f"></i></a>
                      </li>
                      <li className="social__item">
                        <a href="#" className="social__link social__link--style1"><i className="fab fa-linkedin-in"></i></a>
                      </li>
                      <li className="social__item">
                        <a href="#" className="social__link social__link--style1"><i className="fab fa-instagram"></i></a>
                      </li>
                      <li className="social__item">
                        <a href="#" className="social__link social__link--style1"><i className="fab fa-youtube"></i></a>
                      </li>
                      <li className="social__item">
                        <a href="#" className="social__link social__link--style1"><i className="fab fa-twitter"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-5">
                <div className="banner__thumb" data-aos="fade-left" data-aos-duration="1000">
                  <img src="/assets/images/banner/home1/1.png" alt="banner-thumb" className="dark img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner__shape">
          <span className="banner__shape-item banner__shape-item--1">
            <img src="/assets/images/banner/home1/4.png" alt="shape icon" />
          </span>
        </div>
      </section>

      <div className="partner partner--gradient">
        <div className="container">
          <div className="partner__wrapper">
            <div className="partner__slider swiper">
              <div className="swiper-wrapper">
                {['1', '2', '3', '4', '5'].map(num => (
                  <div className="swiper-slide" key={num}>
                    <div className="partner__item">
                      <div className="partner__item-inner">
                        <img src={`/assets/images/partner/light/${num}.png`} alt="partner logo" className="dark" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
