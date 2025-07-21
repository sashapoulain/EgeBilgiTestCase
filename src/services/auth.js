import api from './api';

export const signInAdmin = async (email, password) => {
  const response = await api.post('/signin-admin', { email, password });
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get('/profile');
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/logout');
  return response.data;
};
