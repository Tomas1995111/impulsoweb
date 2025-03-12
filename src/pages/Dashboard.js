import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No se encontró el token de autenticación.');
      return;
    }

    const api = axios.create({
      baseURL: 'http://localhost:3000/api',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    api.get('/protected-route')
      .then(response => {
        setUserData(response.data);
      })
      .catch(err => {
        console.error('Error al obtener los datos:', err);
        setError('No autorizado o error en la solicitud.');
      });
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData ? (
        <div>
          <h1>Bienvenido {userData.name}</h1>
          {/* Mostrar más datos del usuario aquí */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Dashboard;
