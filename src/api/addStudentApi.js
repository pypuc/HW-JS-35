import { API_URL } from '../config.js';

export const addStudentApi = async (student) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
};
