import React from 'react';
import './styles/MemberShip.css'; // Estilos para el componente
const Membership = () => {
  return (
    <div className="membership-container">
      <header className="header">
        <h1 className="membership-title">¡Únete a Impulso Premium!</h1>
        <p className="subheading">Accede a beneficios exclusivos que potenciarán tus inversiones.</p>
      </header>

      <div className="membership-benefits">
        <div className="membership-item">
          <img
            src="https://i.pinimg.com/236x/4c/5c/08/4c5c081ff92084279f3a4a75057390c3.jpg"
            alt="Ideas de trading"
            className="item-icon"
          />
          <h3 className="item-title">Ideas de Trading</h3>
          <p>Obtén estrategias y análisis expertos para maximizar tus ganancias.</p>
        </div>

        <div className="membership-item">
          <img
            src="https://www.adslzone.net/app/uploads-adslzone.net/2020/03/notificacion-whatsapp.jpg"
            alt="Comunidad WhatsApp"
            className="item-icon"
          />
          <h3 className="item-title">Comunidad Exclusiva</h3>
          <p>Conéctate con traders, comparte tus dudas y aprende de la experiencia colectiva.</p>
        </div>

        <div className="membership-item">
          <img
            src="https://www.newtechla.com/wp-content/uploads/2023/02/Imagen-CAPACITACION-VIRTUAL-EN-VIVO2.jpg"
            alt="Capacitaciones en vivo"
            className="item-icon"
          />
          <h3 className="item-title">Capacitaciones en Vivo</h3>
          <p>Accede a cursos interactivos de trading, ¡en tiempo real!</p>
        </div>

        <div className="membership-item">
          <img
            src="https://popularenlinea.com/Personas/blog/PublishingImages/2020/Junio/Ventajas-de-la-capacitaci%C3%B3n-en-l%C3%ADnea-para-las-pymes.jpg"
            alt="Café en vivo"
            className="item-icon"
          />
          <h3 className="item-title">Café en Vivo</h3>
          <p>Únete a conversaciones informales y aprende de tus compañeros.</p>
        </div>

        <div className="membership-item">
          <img
            src="https://statics.forbes.com.ec/2023/12/crop/658d85fd60ee8__600x390.webp"
            alt="Análisis de acciones"
            className="item-icon"
          />
          <h3 className="item-title">Análisis de Acciones</h3>
          <p>Recibe análisis detallados sobre acciones que te ayudarán a tomar decisiones informadas.</p>
        </div>

        <div className="membership-item">
          <img
            src="https://ugc.production.linktr.ee/lPlhFKPQzaRsEWr3v7Og_IZQWyyJsiEflg2N8?io=true&size=avatar-v3_0"
            alt="Beneficios Extra"
            className="item-icon"
          />
          <h3 className="item-title">Beneficios Exclusivos</h3>
          <ul className="benefits-list">
            <li>Abrir cuenta bancaria sin comisiones</li>
            <li>Abrir cuenta en broker sin cargos</li>
            <li>Descuento en la compra de autos Toyota</li>
            <p>y más...</p>
          </ul>
        </div>
      </div>

      <div className="cta-container">
        <button className="cta-button">Hazte Miembro Ahora</button>
      </div>
    </div>
  );
};

export default Membership;
