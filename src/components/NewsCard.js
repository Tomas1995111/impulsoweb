import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/NewsCard.css';
import defaultImage from '../assets/LOGOSIMPULSOMERVAL-03.webp';

const NewsCard = ({ limit }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // 👉 Función para limpiar scripts y etiquetas HTML
  const cleanText = (raw) => {
  if (!raw) return '';

  // 1. Remover etiquetas HTML
  let clean = raw.replace(/<\/?[^>]+>/gi, '');

  // 2. Dividir en líneas y filtrar las que parecen scripts o tracking
  clean = clean
    .split('\n')
    .filter(line => !/analytics|gtm|\.push\(|script|createElement|insertBefore|scorecardresearch/i.test(line))
    .join(' ');

  // 3. Limpiar espacios extra
  return clean.replace(/\s{2,}/g, ' ').trim();
};

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY;
        const response = await axios.get('https://newsdata.io/api/1/news', {
          params: {
            apikey: apiKey,
            country: 'ar',
            language: 'es',
            q: 'finanzas'
          }
        });

        console.log(response.data); // para debug
        setNews(response.data.results || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Error al obtener las noticias');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const displayedNews = limit ? news.slice(0, limit) : news;

  return (
    <div className="news-card">
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p className="loading-text">Cargando noticias...</p>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="news-container">
          {displayedNews.map((article, index) => (
            <div key={index} className="news-item">
              <img
                src={article.image_url || defaultImage}
                alt={article.title}
                className="news-image"
                loading="lazy"
              />
              <h3 className="news-title">{article.title}</h3>
              {article.description && (
                <p className="news-description">
                  {cleanText(article.description)}
                </p>
              )}
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-link"
              >
                Leer más
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsCard;
