import React from 'react';
import './styles/Footer.css';
import logoFooter from '../assets/LOGOSIMPULSOMERVAL-03.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <img src={logoFooter} alt="Impulso Merval Logo" className="footer-logo" />

        {/* Frase institucional */}
        <p className="footer-motto">Impulsando tu futuro financiero con educación y comunidad.</p>

        {/* Enlaces internos */}
        <div className="footer-links">
          <a href="/MemberShip">Sé Miembro</a>
          <a href="/asesores-financieros">Asesores</a>
          <a href="/cursos">Cursos</a>
          <a href="/noticias">Noticias</a>
          <a href="/DollarWidget">Dólar Hoy</a>
        </div>

        {/* Botón de contacto */}
        <a href="/asesores-financieros" className="footer-cta">Contáctanos</a>

        {/* Redes sociales */}
        <div className="social-icons">
          <a href="https://www.facebook.com/impulso.merval" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/impulsomerval" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/5491124035535" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">&copy; {new Date().getFullYear()} Tu Plataforma de Asesoría Financiera. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
