import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/NewsCard.css';

const NewsCard = ({ limit }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY;
        const response = await axios.get(
          `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&country=ar&language=es&category=business`
        );
        
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
        <p>Cargando noticias...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="news-container">
          {displayedNews.map((article, index) => (
            <div key={index} className="news-item">
              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="news-image"
                />
              )}
              <h3 className="news-title">{article.title}</h3>
              {article.description && (
                <p className="news-description">{article.description}</p>
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
