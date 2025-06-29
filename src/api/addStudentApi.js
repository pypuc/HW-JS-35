import { API_URL } from '../config.js';

export const addStudentApi = async (student) => {
  return await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  }).then(response => {
    if (!response.ok) throw new Error('Не вдалося додати студента');
    return response.json();
  });
};
