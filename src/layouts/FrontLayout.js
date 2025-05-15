import React, { useEffect } from "react";
import Header from "../front/Header";
import Footer from "../front/Footer";
import { Outlet } from "react-router-dom";

const FrontLayout = () => {
  useEffect(() => {
    // Load front assets (CSS)
    const frontCSSLinks = [
      "/assets/css/bootstrap.min.css",
      "/assets/css/aos.css",
      "/assets/css/all.min.css",
      "/assets/css/swiper-bundle.min.css",
      "/assets/css/style.css"
    ];

    const loadedLinks = frontCSSLinks.map(href => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    // Load front JS
    const frontScripts = [
      "/assets/js/bootstrap.bundle.min.js",
      "/assets/js/all.min.js",
      "/assets/js/swiper-bundle.min.js",
      "/assets/js/aos.js",
      "/assets/js/fslightbox.js",
      "/assets/js/purecounter_vanilla.js"
    ];

    const loadedScripts = frontScripts.map(src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    // Cleanup on unmount
    return () => {
      loadedLinks.forEach(link => document.head.removeChild(link));
      loadedScripts.forEach(script => document.body.removeChild(script));
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default FrontLayout;
