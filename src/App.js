import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import Home from './pages/Home';
import UserProfile from './components/UserProfile';
import AdminDashboard from './components/AdminDashboard'; // Panel de admin
import AdminProfile from './components/AdminProfile'; // Perfil de admin
import AdminProtectedRoute from './components/AdminProtectedRoute'; // Ruta protegida para admin

// Páginas adicionales
import Courses from './components/Courses'; // Página para /cursos
import News from './components/NewsCard'; // Página para /noticias
import FinancialAdvisors from './pages/FinancialAdvisors';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas para usuarios */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />

        {/* Rutas protegidas para administradores */}
        <Route
          path="/admin-dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin-profile"
          element={
            <AdminProtectedRoute>
              <AdminProfile />
            </AdminProtectedRoute>
          }
        />

        {/* Otras rutas públicas */}
        <Route path="/cursos" element={<Courses />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/asesores-financieros" element={<FinancialAdvisors />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
};

export default App;
