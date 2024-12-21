// ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('token');

  // Si no hay token, redirige a login, sino renderiza el componente
  return token ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
