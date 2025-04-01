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
  const [servicesMenuVisible, setServicesMenuVisible] = useState(false); 
  const megaMenuTimerRef = useRef(null);
  const servicesMenuTimerRef = useRef(null);  

  // Maneja el mouse enter para el menú de "Herramientas"
  const handleMegaMenuMouseEnter = () => {
    if (megaMenuTimerRef.current) {
      clearTimeout(megaMenuTimerRef.current);
    }
    setMegaMenuVisible(true); 
  };

  // Maneja el mouse leave para el menú de "Herramientas"
  const handleMegaMenuMouseLeave = () => {
    megaMenuTimerRef.current = setTimeout(() => {
      setMegaMenuVisible(false); 
    }, 200);
  };

  // Maneja el mouse enter para el menú de "Servicios"
  const handleServicesMenuMouseEnter = () => {
    if (servicesMenuTimerRef.current) {
      clearTimeout(servicesMenuTimerRef.current);  
    }
    setServicesMenuVisible(true); 
  };

  // Maneja el mouse leave para el menú de "Servicios"
  const handleServicesMenuMouseLeave = () => {
    servicesMenuTimerRef.current = setTimeout(() => {
      setServicesMenuVisible(false);
    }, 200);
  };

  // Función para el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/';
  };

  // Sección de menú para "Herramientas"
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

  // Sección de menú para "Servicios"
  const servicesMenuSections = [
    {
      title: 'Opciones de Servicios',
      items: [
        { label: 'Cursos', link: '/cursos' },
        { label: 'Sé miembro', link: '/MemberShip' },
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

        {/* Menú de "Herramientas" */}
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

        {/* Menú de "Servicios" */}
        <li 
          className="mega-link"
          onMouseEnter={handleServicesMenuMouseEnter} 
          onMouseLeave={handleServicesMenuMouseLeave}
        >
          <span>Servicios</span>
          {servicesMenuVisible && (
            <div 
              className="mega-menu-wrapper"
              onMouseEnter={handleServicesMenuMouseEnter}
              onMouseLeave={handleServicesMenuMouseLeave} 
            >
              <MegaMenu sections={servicesMenuSections} />
            </div>
          )}
        </li>

        <li><Link to="/asesores-financieros">Asesores Financieros</Link></li>

        {/* Menú de perfil y cierre de sesión */}
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
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
