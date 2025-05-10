import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import FrontLayout from "./layouts/FrontLayout";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";

import Home from "./front/Home";
import Login from "./front/Login";
import Register from "./front/Register";
import UserDashboard from "./user/Dashboard";
import AdminDashboard from "./admin/Dashboard";

const AuthProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AdminProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("admin");
  return isAdmin ? children : <Navigate to="/login" replace />;
};

function App() {
  const location = useLocation();

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

        {/* Protected User dashboard layout routes */}
        <Route
          element={
            <AuthProtectedRoute>
              <UserDashboardLayout />
            </AuthProtectedRoute>
          }
        >
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Route>

        {/* Protected Admin dashboard layout routes */}
        <Route
          element={
            <AdminProtectedRoute>
              <AdminDashboardLayout />
            </AdminProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
