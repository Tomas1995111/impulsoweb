import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Base URL del backend
});

// Interceptor para manejar el refresco automático de tokens
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await axios.post('/refresh-token', {
          refreshToken: localStorage.getItem('refreshToken'), // Token de refresco guardado
        });

        localStorage.setItem('token', data.accessToken); // Guardar nuevo token
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        return api(originalRequest); // Reintentar la solicitud original
      } catch (refreshError) {
        console.error('Error al refrescar el token:', refreshError);
        logout(); // Forzar logout si no funciona
      }
    }

    return Promise.reject(error);
  }
);

// Función de logout
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  window.location.href = '/login'; // Redirige al login
};

export default api;
