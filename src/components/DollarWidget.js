import React, { useEffect, useState } from 'react';
import './styles/DollarWidget.css';

const DollarWidget = () => {
  const [rates, setRates] = useState(null);
  const [error, setError] = useState(null);

  const fmt = n => (typeof n === 'number' ? n.toLocaleString('es-AR') : '—');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const resp = await fetch('https://dolarapi.com/v1/dolares');
        if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
        const data = await resp.json();

        const byCasa = Object.fromEntries(data.map(d => [d.casa, d]));

        setRates({
          dolarBlue: byCasa.blue,
          dolarOficial: byCasa.oficial,
          dolarMep: byCasa.bolsa,
          liqui: byCasa.contadoconliqui,
          tarjeta: byCasa.tarjeta,
          cripto: byCasa.cripto,
        });
      } catch (err) {
        console.error('Error al obtener los datos:', err);
        setError(err.message);
      }
    };

    fetchRates();
  }, []);

  const renderCard = (title, compra, venta) => (
    <div className="card" key={title}>
      <h4>{title}</h4>
      <div className="rate-info">
        <div className="rate-item">
          <p>
            <strong>Compra:</strong> ${fmt(compra)}
          </p>
        </div>
        {venta !== undefined && (
          <div className="rate-item">
            <p>
              <strong>Venta:</strong> ${fmt(venta)}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="dollar-widget">
      <h3>Valores del Dólar</h3>

      {error ? (
        <p className="error-message">Error: {error}</p>
      ) : !rates ? (
        <div className="rates-container">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="card skeleton-card" key={i}>
              <div className="skeleton-title shimmer" />
              <div className="rate-info">
                <div className="skeleton-text shimmer" />
                <div className="skeleton-text shimmer" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rates-container">
          {rates.dolarBlue && renderCard('Dólar Blue', rates.dolarBlue.compra, rates.dolarBlue.venta)}
          {rates.dolarOficial && renderCard('Dólar Oficial', rates.dolarOficial.compra, rates.dolarOficial.venta)}
          {rates.dolarMep && renderCard('Dólar MEP', rates.dolarMep.compra, rates.dolarMep.venta)}
          {rates.liqui && renderCard('Dólar Liqui', rates.liqui.compra, rates.liqui.venta)}
          {rates.tarjeta && renderCard('Dólar Tarjeta', rates.tarjeta.compra, rates.tarjeta.venta)}
          {rates.cripto && renderCard('Dólar Cripto', rates.cripto.compra, rates.cripto.venta)}
        </div>
      )}
    </div>
  );
};

export default DollarWidget;
