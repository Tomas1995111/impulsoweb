import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Tu Plataforma de Asesoría Financiera. Todos los derechos reservados.</p>
      
      {/* Iconos de redes sociales */}
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
    </footer>
  );
};

export default Footer;
