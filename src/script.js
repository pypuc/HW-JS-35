import { getStudentsApi } from "./api/getStudentsApi.js";
import { addStudentApi } from "./api/addStudentApi.js";
import { deleteStudentApi } from "./api/deleteStudentApi.js";

// Показати список
document.querySelector("#get-students-btn").addEventListener("click", async () => {
  const data = await getStudentsApi();
  document.querySelector("tbody").innerHTML = makeList(data);
});

// Додати студента
document.querySelector("#add-student-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const student = {
    name: document.querySelector("#name").value,
    age: Number(document.querySelector("#age").value),
    course: document.querySelector("#course").value,
    skills: document.querySelector("#skills").value.split(",").map(skill => skill.trim()),
    email: document.querySelector("#email").value,
    isEnrolled: document.querySelector("#isEnrolled").checked,
  };

  await addStudentApi(student);

  const data = await getStudentsApi();
  document.querySelector("tbody").innerHTML = makeList(data);
  event.target.reset();
});

document.querySelector("tbody").addEventListener("click", async (event) => {
  if (event.target.textContent === "Delete") {
    const row = event.target.closest("tr");
    const id = row.querySelector("td").textContent;

    await deleteStudentApi(id);

    const data = await getStudentsApi();
    document.querySelector("tbody").innerHTML = makeList(data);
  }
});

function makeList(arr) {
  return arr
    .map(
      (student) => `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
        <td>${student.skills.join(", ")}</td>
        <td>${student.email}</td>
        <td>${student.isEnrolled ? "Так" : "Ні"}</td>
        <td><button type="button">Delete</button></td>
      </tr>
    `
    )
    .join("");
}
