import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  console.log('Token:', token);  // Aquí puedes seguir monitoreando el token en la consola.

  // Si no hay token, redirige a login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Si hay token, renderiza los "children"
  return children;
};

export default ProtectedRoute;
