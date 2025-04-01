import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import './styles/Navbar.css';
import logo from '../assets/LOGOSIMPULSOMERVAL-05.png';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [megaMenuVisible, setMegaMenuVisible] = useState(false);
  const megaMenuTimerRef = useRef(null);

  const handleMegaMenuMouseEnter = () => {
    if (megaMenuTimerRef.current) {
      clearTimeout(megaMenuTimerRef.current);
    }
    setMegaMenuVisible(true);
  };

  const handleMegaMenuMouseLeave = () => {
    
    megaMenuTimerRef.current = setTimeout(() => {
      setMegaMenuVisible(false);
    }, 200);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/';
  };

 
  const megaMenuSections = [
    {
      title: 'Cotizaciones',
      items: [
        { label: 'Cotización Dólar', link: '/DollarWidget' },
        
      ],
    },
    {
      title: 'Noticias',
      items: [
        { label: 'Últimas Noticias', link: '/noticias' },
        
      ],
    },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        {role === 'admin' && <li><Link to="/dashboard">Dashboard</Link></li>}
        <li><Link to="/cursos">Cursos</Link></li>
        <li 
          className="mega-link"
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
        >
          <span>Herramientas</span>
          {megaMenuVisible && (
            <div 
              className="mega-menu-wrapper"
              onMouseEnter={handleMegaMenuMouseEnter}
              onMouseLeave={handleMegaMenuMouseLeave}
            >
              <MegaMenu sections={megaMenuSections} />
            </div>
          )}
        </li>
        <li><Link to="/asesores-financieros">Asesores Financieros</Link></li>
        {token ? (
          <li 
            className="profile-link"
            onMouseEnter={() => setDropdownVisible(true)} 
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <Link to={role === 'admin' ? '/admin-profile' : '/user-profile'}>
              Mi Perfil
            </Link>
            {dropdownVisible && (
              <div className="dropdown-menu">
                <a href="/" onClick={handleLogout} className="logout-link">
                  Cerrar Sesión
                </a>
              </div>
            )}
          </li>
        ) : (
          <>
           {/* <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>*/}
            <li><Link to="/MemberShip">Sé miembro</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
