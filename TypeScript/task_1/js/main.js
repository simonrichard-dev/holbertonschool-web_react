"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
function printTeacher(firstName, lastName) {
    return (firstName.charAt(0) + ". " + lastName);
}
printTeacher("John", "Doe");
