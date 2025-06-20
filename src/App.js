import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import FrontLayout from "./layouts/FrontLayout";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import AdminProtectedRoute from "./protectedRoutes/AdminProtectedRoute";
import AuthProtectedRoute from "./protectedRoutes/AuthProtectedRoute";


import Home from "./front/Home";
import Login from "./front/Login";
import Register from "./front/Register";
import UserDashboard from "./user/Dashboard";
import AdminDashboard from "./admin/Dashboard";
import EditForm from "./user/EditForm"
import TeamTable from "./user/TeamTable";
import UsersList from "./admin/UsersList";
import UserEditing from "./admin/UserEditing";
import AdminWallet from "./admin/AdminWallet";
import UserWalletHistory from "./user/UserWalletHistory";
import AdminWalletHistory from "./admin/AdminWalletHistory";
import CreateAlert from "./admin/CreateAlert";
import Timeline from "./user/Timeline";
import AdminAlertHistory from "./admin/AdminAlertHistory";
import EditAlertList from "./admin/EditAlertList";
import EditAlert from "./admin/EditAlert";

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
          <Route path="/user/editform" element={<EditForm />} />
          <Route path="/user/teamtable" element={<TeamTable />} />
          <Route path="/user/wallethistory" element={<UserWalletHistory />} />
          <Route path="/user/timeline" element={<Timeline />} />



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
          <Route path="/admin/userslist" element={<UsersList />} />
          <Route path="/admin/userslist/userediting/:id" element={< UserEditing/>} />


          <Route path="/admin/wallet" element={<AdminWallet />} />
          <Route path="/admin/wallet-history" element={<AdminWalletHistory />} />
          <Route path="/admin/create-alert" element={<CreateAlert />} />
          <Route path="/admin/alert-history" element={<AdminAlertHistory />} />
          <Route path="/admin/edit-alertlist/" element={<EditAlertList />} />
          <Route path="/admin/edit-alert/:id" element={<EditAlert />} />




           <Route path="/user/dashboard/:userId" element={<UserDashboard />} />







        </Route>

      </Routes>
    </div>
  );
}

export default App;
