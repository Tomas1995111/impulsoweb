// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Dashboard.css';
const Dashboard = () => {
  const [protectedData, setProtectedData] = useState(null);  // Para almacenar los datos protegidos
  const [error, setError] = useState(null);  // Para manejar errores

  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem('token');  // Obtener el token del localStorage
      console.log(localStorage.getItem('token'));
  // Asegúrate de que el token se obtiene correctamente

      if (!token) {
        setError('No token found');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3000/api/protected-route', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProtectedData(response.data);  // Almacena los datos protegidos
      } catch (error) {
        setError(error.response?.data?.message || 'Error al acceder a la ruta protegida');
      }
    };

    fetchProtectedData();
  }, []);  // El useEffect se ejecuta solo una vez cuando el componente se monta

  return (
    <div>
      <h1>Dashboard</h1>
      {error && <p>{error}</p>}  {/* Muestra el error si lo hay */}
      {protectedData ? (
        <div>
          <h2>Datos protegidos</h2>
          <pre>{JSON.stringify(protectedData, null, 2)}</pre>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Dashboard;
