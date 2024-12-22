import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia esta URL cuando el back-end esté desplegado en producción
});

export default api;
