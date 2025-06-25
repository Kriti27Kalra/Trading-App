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
import CreateNotification from "./admin/CreateNotification"
import Timeline from "./user/Timeline";
import AdminNotificationHistory from "./admin/AdminNotificationHistory";
import EditNotificationList from "./admin/EditNotificationList";
import EditNotification from "./admin/EditNotification";
import WithdrawForm from "./user/WithdrawForm";
import WithdrawHistory from "./user/WithdrawHistory";
import AdminWithdrawRequests from "./admin/AdminWithdrawRequests";

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
          <Route path="/user/withdraw-form" element={<WithdrawForm />} />
            <Route path="/user/withdraw-history" element={<WithdrawHistory />} />





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
          <Route path="/admin/create-notification" element={<CreateNotification />} />
          <Route path="/admin/notification-history" element={<AdminNotificationHistory />} />
          <Route path="/admin/edit-notificationlist/" element={<EditNotificationList />} />
          <Route path="/admin/edit-notification/:id" element={<EditNotification />} />
          <Route path="/admin/withdraw-history" element={<AdminWithdrawRequests />} />





           <Route path="/user/dashboard/:userId" element={<UserDashboard />} />







        </Route>

      </Routes>
    </div>
  );
}

export default App;
