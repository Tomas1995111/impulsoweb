// AdminProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const role = localStorage.getItem('role');
  
  if (role !== 'admin') {
    // Si no es admin, redirige o muestra mensaje de "No autorizado"
    return <Navigate to="/" replace />;
  }
  
  return children;
};

export default AdminProtectedRoute;
