// main.ts
var student1 = {
    firstName: "Claudia",
    lastName: "Bura",
    age: 36,
    location: "Garches",
};
var student2 = {
    firstName: "Dinu",
    lastName: "Mira",
    age: 32,
    location: "Toulouse",
};
var studentsList = [student1, student2];
var table = document.createElement("table");
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
document.body.appendChild(table);
