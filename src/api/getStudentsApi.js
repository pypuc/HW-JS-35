import { API_URL } from "../config.js";

export const getStudents = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log("Сирі дані з сервера:", data);
    console.log("Це масив?", Array.isArray(data));

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = renderStudents(data).join("");
  } catch (error) {
    console.log("Помилка при отриманні студентів:", error);
  }
};

function renderStudents(students) {
  return students.map((object) => {
    const skillsStr = object.skills.join(", ");
    return `
      <tr id="${object.id}">
        <td>${object.id}</td>
        <td>${object.name}</td>
        <td>${object.age}</td>
        <td>${object.course}</td>
        <td>${skillsStr}</td>
        <td>${object.email}</td>
        <td>${object.isEnrolled}</td>
        <td><button type="button" class="delete-btn">Видалити</button></td>
        <td><button type="button" class="update-btn">Оновити</button></td>
      </tr>
    `;
  });
}
