import apiClient from '../api/apiClient';
import { newsApiClient } from '../api/apiClient';

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
      // apiKey: '4807c13eb37b4fefbb4f8b23bbfee32f',
      apiKey: '156aa8dac5b44033b70f438bddea9005',
      pageSize: page,
    },
  });
