export const updateStudent = async (id, student) => {
  const options = {
    method: "PATCH",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    return await fetch(`http://localhost:3000/students/${id}`, options).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
};
