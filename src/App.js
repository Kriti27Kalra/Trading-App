import { Routes, Route, useLocation } from "react-router-dom";
import FrontLayout from "./Layouts/FrontLayout";
import UserDashboardLayout from "./Layouts/UserDashboardLayout";
import AdminDashboardLayout from "./Layouts/AdminDashboardLayout";


import Home from "./front/Home";
import Login from "./front/Login";
import Register from "./front/Register";
import UserDashboard from "./User/Dashboard";
import AdminDashboard from "./Admin/Dashboard";


function App() {
  const location = useLocation();

  // Paths where header/footer should be hidden
  const hideHeaderPaths = ["/admin/dashboard", "/user/dashboard"];
  const hideFooterPaths = ["/admin/dashboard", "/user/dashboard"];

  const shouldHideHeader = hideHeaderPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  const shouldHideFooter = hideFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div>
      

      <Routes>
        {/* Front layout routes */}
        <Route element={<FrontLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* User dashboard layout routes */}
        <Route element={<UserDashboardLayout />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Route>

        {/* Admin dashboard layout routes */}
        <Route element={<AdminDashboardLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
