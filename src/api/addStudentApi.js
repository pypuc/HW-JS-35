export const addStudent = async (obj) => {
    const options = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };
    try {
        return await fetch("http://localhost:3000/students", options).then((res) =>
            res.json()
        );
    } catch (error) {
        console.log(error);
    }
};
