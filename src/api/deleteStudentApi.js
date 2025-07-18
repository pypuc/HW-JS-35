import { API_URL } from '../config.js';

export const deleteStudentApi = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
