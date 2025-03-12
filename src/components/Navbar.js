import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logo from '../assets/LOGOS IMPULSO MERVAL-05.png';

const Navbar = () => {
  const token = localStorage.getItem('token'); // Verificar si el usuario está autenticado
  const role = localStorage.getItem('role'); // Obtener el rol del usuario

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        {role === 'admin' && <li><Link to="/dashboard">Dashboard</Link></li>} {/* Solo muestra si es admin */}
        <li><Link to="/cursos">Cursos</Link></li>
        <li><Link to="/noticias">Noticias</Link></li>
        <li><Link to="/asesores-financieros">Asesores Financieros</Link></li>
        {token ? (
          <>
            <li>
              <Link to={role === 'admin' ? '/admin-profile' : '/user-profile'}>
                Mi Perfil
              </Link>
            </li>
            <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
