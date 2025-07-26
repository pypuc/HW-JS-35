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
  const studentId = item?.id;

  if (e.target.textContent === "Оновити") {
    const backdrop = document.querySelector(".backdrop");
    if (!backdrop) {
      console.warn("Backdrop не знайдено в DOM");
      return;
    }

    backdrop.style.visibility = "visible";
    backdrop.style.display = "flex";

    const updateForm = document.querySelector("#update-student-form");
    if (!updateForm) return;

    updateForm.addEventListener(
      "submit",
      async (e) => {
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

        backdrop.style.visibility = "hidden";
        backdrop.style.display = "none";

        try {
          await updateStudent(studentId, student);
          await getStudents();
        } catch (error) {
          console.error(error);
        }
      },
      { once: true }
    );
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
