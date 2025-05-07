import React from "react";
import Header from "../front/Header";
import Footer from "../front/Footer";
import { Outlet } from "react-router-dom";

const FrontLayout = () => {
    return (
        <>
         <Header />
         <main>
           <Outlet /> {/* renders current route's page */}
         </main>
         <Footer />

         </>
    );
};
export default FrontLayout;
