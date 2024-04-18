// main.ts

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

let student1 : Student = {
    firstName: "Claudia",
    lastName: "Bura",
    age: 36,
    location: "Garches",
};

let student2 : Student = {
    firstName: "Dinu",
    lastName: "Mira",
    age: 32,
    location: "Toulouse",
};

const studentsList : Array<Student> = [student1, student2];

let table : HTMLTableElement = <HTMLTableElement> document.createElement("table");

studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

document.body.appendChild(table);
