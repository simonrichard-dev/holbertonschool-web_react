"use strict";
// main.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = exports.Teacher = exports.Director = void 0;
;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return ("Working from home");
    };
    ;
    Director.prototype.getToWork = function () {
        return ("Getting a coffee break");
    };
    ;
    Director.prototype.workDirectorTasks = function () {
        return ("Getting to director tasks");
    };
    ;
    return Director;
}());
exports.Director = Director;
;
;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return ("Cannot work from home");
    };
    ;
    Teacher.prototype.getCoffeeBreak = function () {
        return ("Cannot have a break");
    };
    ;
    Teacher.prototype.workTeacherTasks = function () {
        return ("Getting to work");
    };
    ;
    return Teacher;
}());
exports.Teacher = Teacher;
;
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }
    return new Director;
}
exports.createEmployee = createEmployee;
;
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$200'));
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
exports.isDirector = isDirector;
;
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
    ;
}
exports.executeWork = executeWork;
;
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
    ;
}
exports.teachClass = teachClass;
console.log(teachClass('Math'));
console.log(teachClass('History'));
