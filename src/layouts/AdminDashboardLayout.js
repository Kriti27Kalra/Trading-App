import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../admin/AdminHeader";
import AdminFooter from "../admin/AdminFooter";
import AdminSidebar from "../admin/AdminSidebar";

function AdminDashboardLayout() {
  useEffect(() => {
    const cssLinks = [
      "/vendors/styles/core.css",
      "/vendors/styles/icon-font.min.css",
      "/vendors/styles/style.css",
      "/plugins/datatables/css/dataTables.bootstrap4.min.css",
      "/plugins/datatables/css/responsive.bootstrap4.min.css"
    ];

    const jsScripts = [
      "/vendors/scripts/core.js",
      "/vendors/scripts/script.min.js",
      "/vendors/scripts/process.js",
      "/vendors/scripts/layout-settings.js",
      "/plugins/datatables/js/jquery.dataTables.min.js",
      "/plugins/datatables/js/dataTables.bootstrap4.min.js",
      "/plugins/datatables/js/dataTables.responsive.min.js",
      "/plugins/datatables/js/responsive.bootstrap4.min.js"
    ];

    // Add CSS
    const linkElements = cssLinks.map(href => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    // Add JS
    const scriptElements = jsScripts.map(src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
      return script;
    });

    // Cleanup on unmount
    return () => {
      linkElements.forEach(link => document.head.removeChild(link));
      scriptElements.forEach(script => document.body.removeChild(script));
    };
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <AdminHeader />
      <AdminSidebar/>
      
      <main className="flex-grow-1">
        <Outlet />
      </main>
      
      <AdminFooter />
    </div>
  );
}

export default AdminDashboardLayout;
