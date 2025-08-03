import { API_URL } from "../config.js";

export const updateStudent = async (id, student) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  try {
    const res = await fetch(`${API_URL}/${id}`, options);
    return await res.json();
  } catch (error) {
    console.log("Помилка при оновленні:", error);
  }
};
