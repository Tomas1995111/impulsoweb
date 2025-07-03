import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Importamos Link
import './styles/Footer.css';
import logoFooter from '../assets/LOGOSIMPULSOMERVAL-03.webp';

const Footer = ({ onOpenPopup }) => {
  return (
    <>
      {/* Bloque de promoción */}
      <div className="prefooter-banner">
        <h2 className="prefooter-title">¿Querés empezar antes que abran los mercados?</h2>
        <p className="prefooter-sub">
          Sumate gratis y recibí el resumen diario <span className="resaltado">antes de las 9 AM</span>.
        </p>
        <button onClick={onOpenPopup} className="view-course-btn">
          Probá 7 días gratis
        </button>
      </div>

      {/* Footer original */}
      <footer className="footer">
        <div className="footer-container">
          <img src={logoFooter} alt="Impulso Merval Logo" className="footer-logo" loading="lazy" />

          <p className="footer-motto">
            Impulsando tu futuro financiero con educación y comunidad.
          </p>

          <div className="footer-links">
            <Link to="/MemberShip">Sé Miembro</Link>
            <Link to="/cursos">Cursos</Link>
            <Link to="/noticias">Noticias</Link>
            <Link to="/DollarWidget">Dólar Hoy</Link>
          </div>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/impulso.merval"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/impulsomerval"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/5491124035535"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Tu Plataforma de Análisis Financiero. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
