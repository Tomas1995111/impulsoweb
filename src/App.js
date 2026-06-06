import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import DollarWidget from './components/DollarWidget'; 
import WhatsAppButton from './components/WhatsAppButton';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import Home from './pages/Home';
import UserProfile from './components/UserProfile';
import AdminDashboard from './components/AdminDashboard';
import AdminProfile from './components/AdminProfile';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Courses from './components/Courses';
import News from './components/NewsCard';
import FinancialAdvisors from './pages/FinancialAdvisors';
import MemberShip from './pages/MemberShip';


const App = () => {
  return (
    <Router> 
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/user-profile" element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        } />

        <Route path="/admin-dashboard" element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        } />
        <Route path="/admin-profile" element={
          <AdminProtectedRoute>
            <AdminProfile />
          </AdminProtectedRoute>
        } />

        <Route path="/DollarWidget" element={<Navigate to="/cotizacion-dolar" replace />} />
        <Route path="/cotizacion-dolar" element={<DollarWidget />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/asesores-financieros" element={<FinancialAdvisors />} />
        <Route path="/MemberShip" element={<Navigate to="/membresia" replace />} />
        <Route path="/membresia" element={<MemberShip />} />
      </Routes>

      <ScrollToTopButton />
      <WhatsAppButton />
    </Router>
  );
};
const preloadLogo = new Image();
preloadLogo.src = "/logo.png";
new Image().src = process.env.PUBLIC_URL + "/logo.png";
export default App;
