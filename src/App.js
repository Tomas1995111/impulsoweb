import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import ScrollToTopButton from './components/ScrollToTopButton';
import Courses from './components/Courses';
import News from './components/NewsCard';
import FinancialAdvisors from './pages/FinancialAdvisors';
import MemberShip from './pages/MemberShip';
import PopupForm from './components/PopupForm';
import ExitIntentModal from './components/ExitIntentModal';


const App = () => {
  const [showPopup, setShowPopup] = useState(false);


  return (
    <Router> 
      <Navbar onOpenPopup={() => setShowPopup(true)} />
      <PopupForm isVisible={showPopup} onClose={() => setShowPopup(false)} />
      
<ExitIntentModal />
      <Routes>
        <Route path="/" element={<Home onOpenPopup={() => setShowPopup(true)} />} />

        <Route path="/home" element={<Home onOpenPopup={() => setShowPopup(true)} />} />

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

        <Route path="/DollarWidget" element={<DollarWidget />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/asesores-financieros" element={<FinancialAdvisors />} />
        <Route path="/MemberShip" element={<MemberShip onOpenPopup={() => setShowPopup(true)} />} />
      </Routes>

      <ScrollToTopButton />
      <WhatsAppButton />
    </Router>
  );
};

export default App;
