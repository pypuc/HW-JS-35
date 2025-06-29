import { API_URL } from '../config.js';

export const deleteStudentApi = async (id) => {
  return await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) throw new Error('Не вдалося видалити студента');
    return response;
  });
};
