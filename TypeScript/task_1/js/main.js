"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClass = void 0;
var teacher3 = {
    contract: false,
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
function printTeacher(firstName, lastName) {
    return (firstName.charAt(0) + ". " + lastName);
}
printTeacher("John", "Doe");
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
    }
    ;
    StudentClass.workOnHomework = function () {
        return ("Currently working");
    };
    ;
    StudentClass.displayName = function (firstName) {
        return (firstName);
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
;
;
;
