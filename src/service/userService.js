import apiClient from '../api/apiClient';
import { newsApiClient } from '../api/apiClient';
import { NEWS_API_KEY } from '@env';

const getCurrentDateFormatted = () => {
  const today = new Date();
  const previousDay = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  const year = previousDay.getFullYear();
  const month = String(previousDay.getMonth() + 1).padStart(2, '0');
  const day = String(previousDay.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
const currentDate = getCurrentDateFormatted();
export const getUsers = () => apiClient.get('/users');
export const addUser = userData => apiClient.post('/users', userData);
export const getNews = page =>
  newsApiClient.get('/v2/everything', {
    params: {
      q: 'tesla',
      sortBy: 'popularity',
      from: currentDate,
      to: currentDate,
      apiKey: NEWS_API_KEY,
      pageSize: page,
    },
  });
