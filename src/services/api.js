import axios from 'axios';

const api = axios.create({
  baseURL: 'https://auth.egebilgiapp.com/api/v1', 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    const cid = localStorage.getItem('customer_id');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    if (cid) {
      config.headers['X-CID'] = cid;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
