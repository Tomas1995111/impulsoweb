import React from 'react';
import './styles/Footer.css';
import logoFooter from '../assets/LOGOSIMPULSOMERVAL-03.png';

const Footer = () => {
  return (
    <>
      {/* Bloque de promoción */}
    <div className="prefooter-banner">
  <h2 className="prefooter-title">¿Querés empezar antes que abran los mercados?</h2>
  <p className="prefooter-sub">Sumate gratis y recibí el resumen diario <span className="resaltado">antes de las 9 AM</span>.</p>
  <a href="/MemberShip" className="view-course-btn">Probá 7 días gratis</a>
</div>


      {/* Footer original */}
      <footer className="footer">
        <div className="footer-container">
          <img src={logoFooter} alt="Impulso Merval Logo" className="footer-logo" />

          <p className="footer-motto">Impulsando tu futuro financiero con educación y comunidad.</p>

          <div className="footer-links">
            <a href="/MemberShip">Sé Miembro</a>
            <a href="/asesores-financieros">Asesores</a>
            <a href="/cursos">Cursos</a>
            <a href="/noticias">Noticias</a>
            <a href="/DollarWidget">Dólar Hoy</a>
          </div>

          <a href="/asesores-financieros" className="footer-cta">Contáctanos</a>

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

          <p className="footer-copy">&copy; {new Date().getFullYear()} Tu Plataforma de Asesoría Financiera. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
