import apiClient from '../api/apiClient';
import { newsApiClient } from '../api/apiClient';

export const getUsers = () => apiClient.get('/users');
export const addUser = userData => apiClient.post('/users', userData);
export const getNews = () =>
  newsApiClient.get('/v2/everything', {
    params: {
      q: 'apple',
      sortBy: 'popularity',
      from: '2026-02-09',
      to: '2026-02-09',
      apiKey: '4807c13eb37b4fefbb4f8b23bbfee32f',
    },
  });
