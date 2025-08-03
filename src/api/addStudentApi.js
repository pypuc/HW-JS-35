import { API_URL } from "../config.js";

export const addStudent = async (obj) => {
  const options = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    const res = await fetch(API_URL, options);
    return await res.json();
  } catch (error) {
    console.log("Помилка при додаванні:", error);
  }
};
