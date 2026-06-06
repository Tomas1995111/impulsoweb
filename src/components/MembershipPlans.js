import React from 'react';
import '../components/styles/MembershipPlans.css';
import { waLink } from '../config/cta';

const MembershipPlans = () => {
  return (
    <section className="membership-section">
      <h2 className="title">Planes & Precios</h2>

      <div className="plans-container">
        {/* Plan Mensual */}
<div className="plan destacado">
  <div className="badge">7 días gratis</div>
  <h3>Mensual</h3>
  <p className="price">$7.500</p>
  <ul>
    <li>📊 Resumen diario</li>
    <li>🚨 Análisis accionables</li>
    <li>📅 Calendario de balances</li>
    <li>🎓 Guías paso a paso</li>
  </ul>
  <a
    className="view-course-btn plan-btn"
    href={waLink('planMensual')}
    target="_blank"
    rel="noopener noreferrer"
  >
    Empezar ahora
  </a>
</div>

{/* Trimestral */}
<div className="plan">
  <h3>Trimestral</h3>
  <p className="price">$20.250</p>
  <p className="subprice">($6.750/mes)</p>
  <ul>
    <li>✅ Todo lo del plan mensual</li>
    <li>🔒 Bloqueo de precio 3 m.</li>
    <li>📈 Informe sectorial extra</li>
  </ul>
  <a
    className="view-course-btn plan-btn"
    href={waLink('planTrimestral')}
    target="_blank"
    rel="noopener noreferrer"
  >
    Elegir plan
  </a>
</div>

{/* Anual */}
<div className="plan">
  <h3>Anual</h3>
  <p className="price">$72.000</p>
  <p className="subprice">($6.000/mes)</p>
  <ul>
    <li>✅ Todo lo del plan mensual</li>
    <li>🔒 Bloqueo de precio 12 m.</li>
    <li>🎁 1 × sesión 1-a-1</li>
  </ul>
  <a
    className="view-course-btn plan-btn"
    href={waLink('planAnual')}
    target="_blank"
    rel="noopener noreferrer"
  >
    Elegir plan
  </a>
</div>
      </div>

      <p className="footnote">Te contactamos por WhatsApp y activás el plan con MercadoPago. Cancelás cuando quieras.</p>
    </section>
  );
};

export default MembershipPlans;
