import { API_URL } from "../config.js";

export const deleteStudent = async (id) => {
  try {
    return await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};
