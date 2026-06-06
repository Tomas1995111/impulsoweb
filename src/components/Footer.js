import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Importamos Link
import './styles/Footer.css';
import logoFooter from '../assets/LOGOSIMPULSOMERVAL-03.webp';
import { waLink } from '../config/cta';

const Footer = () => {
  return (
    <>
      {/* Bloque de promoción */}
      <div className="prefooter-banner">
        <h2 className="prefooter-title">¿Querés empezar antes que abran los mercados?</h2>
        <p className="prefooter-sub">
          Sumate gratis y recibí el resumen diario <span className="resaltado">antes de las 9 AM</span>.
        </p>
        <a
          href={waLink('footer')}
          target="_blank"
          rel="noopener noreferrer"
          className="view-course-btn"
          aria-label="Probar 7 días gratis por WhatsApp (pie de página)"
        >
          Probá 7 días gratis
        </a>
      </div>

      {/* Footer original */}
      <footer className="footer">
        <div className="footer-container">
          <img src={logoFooter} alt="Impulso Merval Logo" className="footer-logo" loading="lazy" width="3702" height="2000" />

          <p className="footer-motto">
            Impulsando tu futuro financiero con educación y comunidad.
          </p>

          <div className="footer-links">
            <Link to="/membresia">Sé Miembro</Link>
            <Link to="/cursos">Cursos</Link>
            <Link to="/noticias">Noticias</Link>
            <Link to="/cotizacion-dolar">Dólar Hoy</Link>
          </div>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/impulso.merval"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Impulso Merval"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com/impulsomerval"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Impulso Merval"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href={waLink('floating')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Impulso Merval (ícono social del pie)"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>

          <p className="footer-disclaimer">
            El contenido de este sitio se facilita con fines informativos y educativos. No constituye asesoramiento financiero personalizado. Las decisiones de inversión son de tu exclusiva responsabilidad; no garantizamos resultados ni rentabilidades futuras.
          </p>

          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Tu Plataforma de Análisis Financiero. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
