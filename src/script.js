import { getStudentsApi } from './api/getStudentsApi.js';
import { addStudentApi } from './api/addStudentApi.js';
import { editStudentApi } from './api/editStudentApi.js';
import { deleteStudentApi } from './api/deleteStudentApi.js';

function getStudents() {
  getStudentsApi()
    .then(data => renderStudents(data))
    .catch(error => {
      console.error('Помилка отримання студентів:', error);
      alert('Не вдалося отримати список студентів');
    });
}

function renderStudents(students) {
  const tbody = document.querySelector('#students-table tbody');
  tbody.innerHTML = '';

  students.forEach(student => {
    const tr = document.createElement('tr');
    tr.dataset.id = student.id;

    tr.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td>${student.skills.join(', ')}</td>
      <td>${student.email}</td>
      <td>${student.isEnrolled ? 'Так' : 'Ні'}</td>
      <td>
        <button class="edit-btn">Оновити</button>
        <button class="delete-btn">Видалити</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function addStudent(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value);
  const course = document.getElementById('course').value;
  const skills = document.getElementById('skills').value.split(',').map(s => s.trim());
  const email = document.getElementById('email').value;
  const isEnrolled = document.getElementById('isEnrolled').checked;

  const newStudent = { name, age, course, skills, email, isEnrolled };

  addStudentApi(newStudent)
    .then(() => {
      alert('Студента додано!');
      getStudents();
      e.target.reset();
    })
    .catch(() => {
      alert('Помилка при додаванні студента');
    });
}

function editStudent(id) {
  const newName = prompt("Введіть нове ім'я студента:");
  if (!newName) return;

  editStudentApi(id, { name: newName })
    .then(() => {
      alert("Ім'я оновлено!");
      getStudents();
    })
    .catch(() => alert("Помилка при оновленні студента"));
}

function deleteStudent(id) {
  if (!confirm('Ви впевнені, що хочете видалити цього студента?')) return;

  deleteStudentApi(id)
    .then(() => {
      alert('Студента видалено!');
      getStudents();
    })
    .catch(() => alert('Помилка при видаленні студента'));
}

document.querySelector('#students-table tbody').addEventListener('click', function (e) {
  const tr = e.target.closest('tr');

  if (tr) {
    const id = tr.dataset.id;

    if (e.target.classList.contains('edit-btn')) {
      editStudent(id);
    }

    if (e.target.classList.contains('delete-btn')) {
      deleteStudent(id);
    }
  }
});

document.getElementById('get-students-btn').addEventListener('click', getStudents);
document.getElementById('add-student-form').addEventListener('submit', addStudent);
