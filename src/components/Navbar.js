import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logo from '../assets/LOGOS IMPULSO MERVAL-05.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/cursos">Cursos</Link></li>
        <li><Link to="/noticias">Noticias</Link></li>
        <li><Link to="/perfil">Mi Perfil</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
