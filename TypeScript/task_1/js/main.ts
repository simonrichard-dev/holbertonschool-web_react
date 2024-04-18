// main.ts

export interface Teacher {
  [propName: string]: any;
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
}

const teacher3: Teacher = {
  contract: false,
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
};

console.log(teacher3);

interface Directors extends Teacher {
numberOfReports: number;
}

const director1: Directors = {
firstName: 'John',
lastName: 'Doe',
location: 'London',
fullTimeEmployee: true,
numberOfReports: 17,
};

console.log(director1);

function printTeacher(firstName: string, lastName: string) {
return (firstName.charAt(0) + ". "  + lastName);
}

printTeacher("John", "Doe")

export class StudentClass {
  constructor(firstName: string, lastName: string) {
  };

  static workOnHomework () {
    return ("Currently working");
  };

  static displayName (firstName: string) {
    return (firstName)
  }
};

export interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface
};

export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
};
