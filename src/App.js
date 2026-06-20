import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import DollarWidget from './components/DollarWidget'; 
import WhatsAppButton from './components/WhatsAppButton';
import ProtectedRoute from './pages/ProtectedRoute';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import AdminProtectedRoute from './components/AdminProtectedRoute';

const Register = React.lazy(() => import('./pages/Register'));
const Login = React.lazy(() => import('./pages/Login'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const UserProfile = React.lazy(() => import('./components/UserProfile'));
const AdminDashboard = React.lazy(() => import('./components/AdminDashboard'));
const AdminProfile = React.lazy(() => import('./components/AdminProfile'));
const Courses = React.lazy(() => import('./components/Courses'));
const News = React.lazy(() => import('./components/NewsCard'));
const FinancialAdvisors = React.lazy(() => import('./pages/FinancialAdvisors'));
const MemberShip = React.lazy(() => import('./pages/MemberShip'));


const App = () => {
  return (
    <Router> 
      <ScrollToTop />
      <Navbar />

      <main id="main-content" role="main">
        <Suspense fallback={null}>
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
        </Suspense>
      </main>

      <ScrollToTopButton />
      <WhatsAppButton />
    </Router>
  );
};
export default App;
