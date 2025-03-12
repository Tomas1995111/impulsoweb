// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState(null);
  const navigate              = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      const { token, role } = response.data;

      // Guardar token y rol en localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Redirigir según el rol
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-profile');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
