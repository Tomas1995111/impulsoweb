import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  useEffect(() => {
    // Si el usuario no es admin, redirige o no muestra nada
    if (role !== 'admin') {
      navigate('/'); // o puedes mostrar un mensaje "No autorizado"
      return;
    }

    const token = localStorage.getItem('token');
    const api = axios.create({
      baseURL: 'https://impulsomerval.duckdns.org/api/admin',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    api.get('/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error al obtener los usuarios:', error);
      });
  }, [role, navigate]);

  // Opcional: Mostrar mensaje si no es admin
  if (role !== 'admin') return <p>No autorizado</p>;

  return (
    <div>
      <h1>Panel de Administrador</h1>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
