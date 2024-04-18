// main.js

interface DirectorInterface {
    workFromHome(): string;
    getToWork(): string;
    workDirectorTasks(): string;
};

export class Director implements DirectorInterface {
    workFromHome(): string {
        return ("Working from home");
    };

    getToWork(): string {
        return ("Getting a coffee break");
    };

    workDirectorTasks(): string {
        return ("Getting to director tasks");
    };
};

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
};

export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return ("Cannot work from home");
    };

    getCoffeeBreak(): string {
        return ("Cannot have a break");
    };

    workTeacherTasks(): string {
        return ("Getting to work");
    };
};

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }

    return new Director;
};

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$200'));


export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
};

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    };
};


console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


export type Subjects = "Math" | "History";

export function teachClass(todayClass: string): string {
    if (todayClass === 'Math') {
        return 'Teaching Math'
    } else if (todayClass === 'History') {
        return 'Teaching History'
    };
}

console.log(teachClass('Math'));
console.log(teachClass('History'));

