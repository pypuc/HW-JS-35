import { API_URL } from '../config.js';

export const getStudentsApi = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
