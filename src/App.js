import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import FrontLayout from "./layouts/FrontLayout";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import AdminUsers from "./admin/AdminUsers";
import EditUser from "./admin/EditUser";



import Home from "./front/Home";
import Login from "./front/Login";
import Register from "./front/Register";
import UserDashboard from "./user/Dashboard";
import AdminDashboard from "./admin/Dashboard";
import Form from "./components/Form";
import Table from "./components/Table";
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

  

  return (
    <div>
      

      <Routes>
        {/* Front layout routes */}
        <Route element={<FrontLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<Login />} />
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
          <Route path="/user/basicform" element={<Form />} />
          <Route path="/user/basictable" element={<Table />} />

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
          <Route path="/admin/basicform" element={<Form />} />
          <Route path="/admin/basictable" element={<Table />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/users/edit/:id" element={<EditUser />} />


        </Route>
      </Routes>
    </div>
  );
}

export default App;
