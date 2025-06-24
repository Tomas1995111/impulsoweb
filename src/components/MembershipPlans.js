import React from 'react';
import '../components/styles/MembershipPlans.css'; // si usás CSS tradicional

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
            <li>🚨 Alertas accionables</li>
            <li>📅 Calendario de balances</li>
            <li>🎓 Guías paso a paso</li>
          </ul>
          <button className='view-course-btn'>Empezar ahora</button>
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
          <button className='view-course-btn'>Elegir plan</button>
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
          <button className='view-course-btn'>Elegir plan</button>
        </div>
      </div>

      <p className="footnote">Pagás con MercadoPago. Cancelás cuando quieras.</p>
    </section>
  );
};

export default MembershipPlans;
