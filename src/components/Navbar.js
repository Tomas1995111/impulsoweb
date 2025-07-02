import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Navbar.css';
import logo from '../assets/LOGOSIMPULSOMERVAL-05.png';

/* ---------- estructura de navegación ---------- */
const NAV_ITEMS = [
  { label: 'Inicio', path: '/' },
  {
    label: 'Herramientas',
    sub: [
      { label: 'Cotización Dólar', path: '/DollarWidget' },
      { label: 'Últimas Noticias', path: '/noticias' },
    ],
  },
  {
    label: 'Servicios',
    sub: [
      { label: 'Cursos', path: '/cursos' },
      { label: 'Sé miembro', path: '/MemberShip' },
    ],
  },
];

const Navbar = ({ onOpenPopup }) => {
  const { pathname } = useLocation();

  /* -------- estados -------- */
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null); // para submenús en mobile

  /* -------- helpers -------- */
  const toggleMobile   = ()   => setMobileOpen((p) => !p);
  const toggleSub      = (l)  => setOpenSub((p) => (p === l ? null : l));
  const closeAllMenus  = ()   => { setMobileOpen(false); setOpenSub(null); };

  return (
    <header className="navbar">
      {/* ---------- logo ---------- */}
      <Link to="/" className="logo-link" onClick={closeAllMenus}>
        <img src={logo} alt="Impulso Merval" className="logo-img" />
      </Link>

      {/* ---------- botón hamburguesa ---------- */}
      <button
        className={`hamburger ${mobileOpen ? 'open' : ''}`}
        onClick={toggleMobile}
        aria-label="Menú"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {/* ---------- links ---------- */}
      <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="nav-item">
            {/* ----------- item con submenú ----------- */}
            {item.sub ? (
              <>
                <button
                  className={`nav-btn ${
                    item.sub.some((s) => s.path === pathname) ? 'active' : ''
  } ${openSub === item.label && mobileOpen ? 'open' : ''}`}
  onClick={() => (mobileOpen ? toggleSub(item.label) : undefined)}
>
                  {item.label}
                </button>

                <ul
                  className={`submenu ${
                    openSub === item.label || !mobileOpen ? 'show' : ''
                  }`}
                >
                  {item.sub.map((sub) => (
                    <li key={sub.path}>
                      <Link
                        to={sub.path}
                        className={pathname === sub.path ? 'active' : ''}
                        onClick={closeAllMenus}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              /* ----------- link simple ----------- */
              <Link
                to={item.path}
                className={pathname === item.path ? 'active' : ''}
                onClick={closeAllMenus}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}

        {/* ---------- call-to-action ---------- */}
        <button className="free-trial-btn" onClick={onOpenPopup}>
          Probar Gratis
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
