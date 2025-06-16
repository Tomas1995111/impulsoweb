import React, { useEffect, useState } from 'react';
import './styles/DollarWidget.css';

const DollarWidget = () => {
  const [rates, setRates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://dolarapi.com/v1/dolares');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Datos recibidos desde dolarapi:', data);

        // Procesamos los datos igual que lo hacías en el backend
        const mappedRates = {
          dolarBlue: data.find(d => d.nombre === 'Blue'),
          dolarOficial: data.find(d => d.nombre === 'Oficial'),
          dolarMep: data.find(d => d.nombre === 'Bolsa'),
          liqui: data.find(d => d.nombre === 'Contado con Liqui'),
          tarjeta: data.find(d => d.nombre === 'Tarjeta'),
          cripto: data.find(d => d.nombre === 'Cripto'),
        };

        const formattedRates = {
          dolarBlue: { compra: mappedRates.dolarBlue?.compra, venta: mappedRates.dolarBlue?.venta },
          dolarOficial: { compra: mappedRates.dolarOficial?.compra, venta: mappedRates.dolarOficial?.venta },
          dolarMep: { compra: mappedRates.dolarMep?.compra, venta: mappedRates.dolarMep?.venta },
          liqui: { compra: mappedRates.liqui?.compra, venta: mappedRates.liqui?.venta },
          tarjeta: { compra: mappedRates.tarjeta?.compra, venta: mappedRates.tarjeta?.venta },
          cripto: { compra: mappedRates.cripto?.compra, venta: mappedRates.cripto?.venta }
        };

        setRates(formattedRates);
      } catch (err) {
        console.error("Error al obtener los datos:", err);
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
          <p><strong>Compra:</strong> ${compra}</p>
        </div>
        {venta && (
          <div className="rate-item">
            <p><strong>Venta:</strong> ${venta}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="dollar-widget">
      <h3>Valores del Dólar</h3>
      {error ? (
        <p className="error-message">{`Error: ${error}`}</p>
      ) : !rates ? (
        <div className="rates-container">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="card skeleton-card" key={index}>
              <div className="skeleton-title shimmer"></div>
              <div className="rate-info">
                <div className="skeleton-text shimmer"></div>
                <div className="skeleton-text shimmer"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rates-container">
          {rates.dolarBlue && renderCard('Dólar Blue', rates.dolarBlue.compra, rates.dolarBlue.venta)}
          {rates.dolarOficial && renderCard('Dólar Oficial', rates.dolarOficial.compra, rates.dolarOficial.venta)}
          {rates.dolarMep && renderCard('Dólar Mep', rates.dolarMep.compra, rates.dolarMep.venta)}
          {rates.liqui && renderCard('Dólar Liqui', rates.liqui.compra, rates.liqui.venta)}
          {rates.tarjeta && renderCard('Dólar Tarjeta', rates.tarjeta.compra)}
          {rates.cripto && renderCard('Dólar Cripto', rates.cripto.compra, rates.cripto.venta)}
        </div>
      )}
    </div>
  );
};

export default DollarWidget;
