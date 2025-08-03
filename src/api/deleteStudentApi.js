import { API_URL } from "../config.js";

export const deleteStudent = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (error) {
    console.log("Помилка при видаленні:", error);
  }
};
