import { getStudents } from "./api/getStudentsApi";
import { updateStudent } from "./api/editStudentApi";
import { addStudent } from "./api/addStudentApi";
import { deleteStudent } from "./api/deleteStudentApi";

document.querySelector("#get-students-btn").addEventListener("click", async () => {
  await getStudents();
});

const form = document.querySelector("#add-student-form");

function collectInfo(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = e.target.elements.nameCollect.value;
    const age = e.target.elements.ageCollect.value;
    const course = e.target.elements.courseCollect.value;
    const skills = e.target.elements.skillsCollect.value.split(", ");
    const email = e.target.elements.emailCollect.value;
    const isEnrolled = e.target.elements.isEnrolledCollect.checked;

    const student = {
      name,
      age,
      course,
      skills,
      email,
      isEnrolled,
    };

    addStudent(student);
  });
}

collectInfo(form);

document.querySelector("tbody").addEventListener("click", async (e) => {
  if (e.target.textContent === "Оновити") {
    const item = e.target.closest("tr");
    document.querySelector(".backdrop").style.visibility = "visible";
    document.querySelector(".backdrop").style.display = "flex";

    document.querySelector("#update-student-form").addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = e.target.elements.nameCollect.value;
      const age = e.target.elements.ageCollect.value;
      const course = e.target.elements.courseCollect.value;
      const skills = e.target.elements.skillsCollect.value.split(", ");
      const email = e.target.elements.emailCollect.value;
      const isEnrolled = e.target.elements.isEnrolledCollect.checked;

      const student = {
        name,
        age,
        course,
        skills,
        email,
        isEnrolled,
      };

      document.querySelector(".backdrop").style.visibility = "hidden";
      document.querySelector(".backdrop").style.display = "none";

      try {
        await updateStudent(item.id, student);
      } catch (error) {
        console.error(error);
      }
    }, { once: true });
  }

  if (e.target.textContent === "Видалити") {
    const item = e.target.closest("tr");
    try {
      await deleteStudent(item.id);
    } catch (error) {
      console.log(error);
    }
  }
});
