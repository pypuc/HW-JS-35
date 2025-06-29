import { API_URL } from '../config.js';

export const editStudentApi = async (id, updatedFields) => {
  return await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedFields),
  }).then(response => {
    if (!response.ok) throw new Error('Не вдалося оновити студента');
    return response.json();
  });
};
