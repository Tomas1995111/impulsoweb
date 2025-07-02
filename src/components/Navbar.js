import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import './styles/Navbar.css';
import logo from '../assets/LOGOSIMPULSOMERVAL-05.png';

const Navbar = ({ onOpenPopup }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [megaMenuVisible, setMegaMenuVisible] = useState(false);
  const [servicesMenuVisible, setServicesMenuVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const megaMenuTimerRef = useRef(null);
  const servicesMenuTimerRef = useRef(null);  
  const navRef = useRef(null); // Referencia al contenedor de la navbar

  // Secciones para el mega menú de "Herramientas"
  const megaMenuSections = [
    {
      title: '',
      items: [
        { label: 'Cotización Dólar', link: '/DollarWidget' },
        { label: 'Últimas Noticias', link: '/noticias' },
      ],
    },
  ];

  // Secciones para el mega menú de "Servicios"
  const servicesMenuSections = [
    {
      title: '',
      items: [
        { label: 'Cursos', link: '/cursos' },
        { label: 'Sé miembro', link: '/MemberShip' },
      ],
    },
  ];

  // Funciones para mostrar/ocultar mega menús
  const handleMegaMenuMouseEnter = () => {
    if (megaMenuTimerRef.current) clearTimeout(megaMenuTimerRef.current);
    setMegaMenuVisible(true); 
  };

  const handleMegaMenuMouseLeave = () => {
    megaMenuTimerRef.current = setTimeout(() => {
      setMegaMenuVisible(false); 
    }, 200);
  };

  const handleServicesMenuMouseEnter = () => {
    if (servicesMenuTimerRef.current) clearTimeout(servicesMenuTimerRef.current);  
    setServicesMenuVisible(true); 
  };

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

  const isActiveHerramientas = megaMenuSections.some(section =>
    section.items.some(item => item.link === location.pathname)
  );

  const isActiveServicios = servicesMenuSections.some(section =>
    section.items.some(item => item.link === location.pathname)
  );
// menú mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Cierra el menú mobile si se hace click fuera del nav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo-link">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>

      
      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>

      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Inicio
          </Link>
        </li>
        {role === 'admin' && (
          <li>
            <Link 
              to="/dashboard" 
              className={location.pathname === '/dashboard' ? 'active' : ''}
            >
              Dashboard
            </Link>
          </li>
        )}

        {/* Menú de "Herramientas" */}
        <li 
          className="mega-link"
          onMouseEnter={handleMegaMenuMouseEnter} 
          onMouseLeave={handleMegaMenuMouseLeave} 
        >
          <span className={isActiveHerramientas ? 'active' : ''}>
            Herramientas
          </span>
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
          <span className={isActiveServicios ? 'active' : ''}>
            Servicios
          </span>
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

        <li>
          {/*<Link 
            to="/asesores-financieros" 
            className={location.pathname === '/asesores-financieros' ? 'active' : ''}
          >
            Asesores Financieros
          </Link>*/}
        </li>

        {/* Menú de perfil y cierre de sesión */}
        {token && (
          <li 
            className="profile-link"
            onMouseEnter={() => setDropdownVisible(true)} 
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <Link 
              to={role === 'admin' ? '/admin-profile' : '/user-profile'}
              className={
                (location.pathname === '/admin-profile' || location.pathname === '/user-profile') 
                  ? 'active' 
                  : ''
              }
            >
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
        )}
        <li>
        <button
  onClick={() => {
    console.log('Se hizo clic en Probar Gratis');
    onOpenPopup();
  }}
  className="free-trial-btn"
>
  Probar Gratis
</button>


        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
