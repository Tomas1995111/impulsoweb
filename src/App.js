// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import Dashboard from '../src/pages/Dashboard';
import ProtectedRoute from '../src/pages/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Usamos ProtectedRoute para envolver Dashboard */}
        <Route 
          path="/dashboard" 
          element={<ProtectedRoute element={<Dashboard />} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
