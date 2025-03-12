// UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const api = axios.create({
      baseURL: 'http://localhost:3000/api',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    api.get('/user-profile')
      .then(response => {
        setProfile(response.data.user);
      })
      .catch(error => {
        console.error('Error al obtener el perfil:', error);
        navigate('/login');
      });
  }, [navigate]);

  return (
    <div>
      {profile ? (
        <div>
          <h1>Perfil de {profile.nombre}</h1>
          <p>Email: {profile.email}</p>
          <p>Rol: {profile.rol}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default UserProfile;
