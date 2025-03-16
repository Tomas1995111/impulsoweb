import React, { useEffect, useState } from 'react';
import './styles/DollarWidget.css';

const DollarWidget = () => {
  const [rates, setRates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setRates(data);
      } catch (err) {
        console.error("Error al obtener los datos:", err);
        setError(err.message);
      }
    };

    fetchRates();
  }, []);

  return (
    <div className="dollar-widget">
      <h3>Valores del Dólar</h3>
      {error ? (
        <p className="error-message">Error: {error}</p>
      ) : !rates ? (
        <p>Cargando...</p>
      ) : (
        <div className="rates-container">
          <div className="rate-item">
            <strong>Oficial:</strong> Promedio {rates.oficial.value_avg} | Compra {rates.oficial.value_buy} | Venta {rates.oficial.value_sell}
          </div>
          <div className="rate-item">
            <strong>Blue:</strong> Promedio {rates.blue.value_avg} | Compra {rates.blue.value_buy} | Venta {rates.blue.value_sell}
          </div>
        </div>
      )}
    </div>
  );
};

export default DollarWidget;
