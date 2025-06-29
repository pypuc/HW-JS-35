import { API_URL } from '../config.js';

export const getStudentsApi = async () => {
  return await fetch(API_URL)
    .then(response => {
      if (!response.ok) throw new Error('Не вдалося отримати дані');
      return response.json();
    });
};
