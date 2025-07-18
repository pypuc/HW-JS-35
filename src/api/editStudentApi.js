import { API_URL } from "../config.js";

export const editStudentApi = async (id, student) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });
};
