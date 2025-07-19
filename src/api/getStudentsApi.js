export const getStudents = async () => {
    try {
        return await fetch("http://localhost:3000/students")
            .then((res) => res.json())
            .then((data) => {
                const tableBody = document.querySelector("tbody");
                tableBody.innerHTML = renderStudents(data).join("");
            });
    } catch (error) {
        console.log(error);
    }
};

function renderStudents(students) {
    return students.map((object) => {
        const skillsArr = object.skills;
        const skillsStr = skillsArr.join(', ');
        return `
        <tr id="${object.id}">
            <td name="id">${object.id}</td>
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
