import React, { useEffect, useState } from 'react';
import './styles/DollarWidget.css';

const DollarWidget = () => {
  const [rates, setRates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/dollar/price");
        const data = await response.json();
        setRates(data.dolarBlue);
      } catch (err) {
        console.error("Error al obtener los datos:", err);
        setError(err.message);
      }
    };

    fetchRates();
  }, []);

  return (
    <div className="dollar-widget">
      <h3>Valores del Dolar Blue</h3>
      {error ? (
        <p className="error-message">{`Error: ${error}`}</p>  
      ) : !rates ? (
        <div className="loading-spinner">Cargando...</div>
      ) : (
        <div className="rates-container">
          <div className="rate-item">
            <strong>Compra:</strong> <span className="rate-value">${rates.compra}</span>
          </div>
          <div className="rate-item">
            <strong>Venta:</strong> <span className="rate-value">${rates.venta}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DollarWidget;
