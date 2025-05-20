import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import FrontLayout from "./layouts/FrontLayout";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import AdminUsers from "./admin/AdminUsers";
import EditUser from "./admin/EditUser";
import EditUserProfile from "./user/EditUserProfile";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import AuthProtectedRoute from "./components/AuthProtectedRoute";


import Home from "./front/Home";
import Login from "./front/Login";
import Register from "./front/Register";
import UserDashboard from "./user/Dashboard";
import AdminDashboard from "./admin/Dashboard";
import UserForm from "./user/UserForm";
import UserTable from "./user/UserTable";
import AdminForm from "./admin/AdminForm";
import AdminTable from "./admin/AdminTable";


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
          <Route path="/user/basicform" element={<UserForm />} />
          <Route path="/user/basictable" element={<UserTable />} />
          <Route path="/user/edit-profile" element={<EditUserProfile />} />

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
          <Route path="/admin/basicform" element={<AdminForm />} />
          <Route path="/admin/basictable" element={<AdminTable />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/users/edit/:id" element={<EditUser />} />



        </Route>
      </Routes>
    </div>
  );
}

export default App;
