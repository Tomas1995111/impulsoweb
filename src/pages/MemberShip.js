import React from 'react';
import './styles/MemberShip.css'; // Estilos para el componente
const MemberShip = ({ onOpenPopup }) => {

  return (
    <div className="membership-container">
      <header className="header">
        <h1 className="membership-title">¡Únete a Impulso Premium!</h1>
        <p className="subheading">Accede a beneficios exclusivos que potenciarán tus inversiones.</p>
      <div className="cta-container">

<button 
  onClick={() => window.open("https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808476d74ecd0176de28badb1380", "_blank")} 
  className="cta-button secondary"
>
  Probá 7 días Gratis
</button>
          <a 
            href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808476d74ecd0176de28badb1380" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="cta-button">Hazte Miembro Ahora</button>
          </a>
        </div>
      </header>

      <div className="membership-benefits">
        <div className="membership-item">
          <img
            src="https://i.pinimg.com/236x/4c/5c/08/4c5c081ff92084279f3a4a75057390c3.jpg"
            alt="Ideas de trading"
            className="item-icon"
          />
          <h3 className="item-title">Resumen Diario</h3>
          <p>Panorama de índices, dólar y acciones en lenguaje simple, directo a tu WhatsApp.</p>
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
          <h3 className="item-title">Educación Continua</h3>
          <p>Mini-clases, glosario y guías paso a paso que transforman conceptos difíciles en acciones
            simples.</p>
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
          <h3 className="item-title">Extras de Suscriptor</h3>
          <ul className="benefits-list">
            <li>Abrí cuenta en broker sin costos</li>
            <li>Programa de referidos</li>
            <li>Descuentos en plataformas de datos y herramientas</li>
            <li>Descuentos y acuerdos exclusivos</li>
            <li>Y nuevas ventajas cada mes</li>
          </ul>
        </div>
      </div>

    
    </div>
  );
};

export default MemberShip;
