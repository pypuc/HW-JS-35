import { getStudents } from "./api/getStudentsApi.js";
import { updateStudent } from "./api/editStudentApi.js";
import { addStudent } from "./api/addStudentApi.js";
import { deleteStudent } from "./api/deleteStudentApi.js";

document.querySelector("#get-students-btn").addEventListener("click", async () => {
  await getStudents();
});

const form = document.querySelector("#add-student-form");

function collectInfo(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const age = e.target.elements.age.value;
    const course = e.target.elements.course.value;
    const skills = e.target.elements.skills.value.split(", ");
    const email = e.target.elements.email.value;
    const isEnrolled = e.target.elements.isEnrolled.checked;

    const student = {
      name,
      age,
      course,
      skills,
      email,
      isEnrolled,
    };

    addStudent(student).then(() => {
      getStudents();
      form.reset();
    });
  });
}

collectInfo(form);

document.querySelector("tbody").addEventListener("click", async (e) => {
  const item = e.target.closest("tr");
  const studentId = item.id;

  if (e.target.textContent === "Оновити") {
    const cells = item.querySelectorAll("td");

    const name = cells[1].textContent;
    const age = cells[2].textContent;
    const course = cells[3].textContent;
    const skills = cells[4].textContent;
    const email = cells[5].textContent;
    const isEnrolled = cells[6].textContent === "true";

    cells[1].innerHTML = `<input type="text" value="${name}">`;
    cells[2].innerHTML = `<input type="number" value="${age}">`;
    cells[3].innerHTML = `<input type="text" value="${course}">`;
    cells[4].innerHTML = `<input type="text" value="${skills}">`;
    cells[5].innerHTML = `<input type="email" value="${email}">`;
    cells[6].innerHTML = `<input type="checkbox" ${isEnrolled ? "checked" : ""}>`;

    cells[7].innerHTML = `<button class="save-btn">Зберегти</button>`;
  }

  if (e.target.classList.contains("save-btn")) {
    const inputs = item.querySelectorAll("input");

    const updatedStudent = {
      name: inputs[0].value,
      age: inputs[1].value,
      course: inputs[2].value,
      skills: inputs[3].value.split(", "),
      email: inputs[4].value,
      isEnrolled: inputs[5].checked,
    };

    try {
      await updateStudent(studentId, updatedStudent);
      await getStudents();
    } catch (error) {
      console.error("Помилка при оновленні:", error);
    }
  }

  if (e.target.textContent === "Видалити") {
    try {
      await deleteStudent(studentId);
      await getStudents();
    } catch (error) {
      console.error(error);
    }
  }
});
