import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No estás autenticado');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3000/api/user-profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        setError(error.response?.data?.message || 'Error al cargar los datos del perfil');
      }
    };

    fetchUserData();
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h1>Mi Perfil</h1>
      {userData ? (
        <div>
          <p><strong>Nombre:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Rol:</strong> {userData.role}</p>
          <p><strong>Fecha de registro:</strong> {new Date(userData.fecha_registro).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  );
};

export default UserProfile;
