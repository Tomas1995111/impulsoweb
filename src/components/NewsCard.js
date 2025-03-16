import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/NewsCard.css';

const NewsCard = ({ limit }) => {  // Recibe el prop limit
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Obtención de noticias
  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log(process.env.REACT_APP_NEWS_API_KEY);  // Verifica si la API key se carga correctamente
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
        setNews(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError('Error al obtener las noticias');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Limitar el número de noticias según el prop `limit`
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
            <img src={article.urlToImage} alt={article.title} className="news-image" />
            <h3 className="news-title">{article.title}</h3>
            <p className="news-description">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-link">Leer más</a>
          </div>
        ))}
      </div>
    )}
  </div>
);
};

export default NewsCard;
