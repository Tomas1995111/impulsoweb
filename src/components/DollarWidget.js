import React, { useEffect, useState } from 'react';
import './styles/DollarWidget.css';

const DollarWidget = () => {
  const [rates, setRates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/dollar/price");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Datos recibidos:', data);
        setRates(data);
      } catch (err) {
        console.error("Error al obtener los datos:", err);
        setError(err.message);
      }
    };

    fetchRates();
  }, []);

  const renderCard = (title, compra, venta) => (
    <div className="card">
      <h4>{title}</h4>
      <div className="rate-info">
        <div className="rate-item">
          <p><strong>Compra:</strong> ${compra}</p>
        </div>
        <div className="rate-item">
          <p><strong>Venta:</strong> ${venta}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dollar-widget">
      <h3>Valores del Dólar</h3>
      {error ? (
        <p className="error-message">{`Error: ${error}`}</p>
      ) : !rates ? (
        <div className="spinner-container">
        <div className="spinner"></div>
        <p className="loading-text">Cargando cotizaciones...</p>
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
