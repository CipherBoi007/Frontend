import React from "react";
import Homepage from "../Pages/Homepage";
import About from "../Pages/About";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsOfService from "../Pages/TermsOfService";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import AdminLayout from "../Components/Admin/AdminLayout";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import StaffManagement from "../Pages/Admin/StaffManagement";
import DepartmentManagement from "../Pages/Admin/DepartmentManagement";
import { BrowserRouter , Routes , Route, Navigate} from "react-router-dom" ;

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return children;
};



const AppRoutes = () => {
  return (
    <BrowserRouter >
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin Routes */}
        <Route path="/admin" element={
            <ProtectedRoute>
                <AdminLayout />
            </ProtectedRoute>
        }>
          <Route index element={<AdminDashboard />} />
          <Route path="staff" element={<StaffManagement />} />
          <Route path="departments" element={<DepartmentManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes