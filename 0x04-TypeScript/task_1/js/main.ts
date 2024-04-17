class Teacher {
    private firstName: string;
    private lastName: string;
    private fullTimeEmployee: boolean;
    private yearsOfExperience?: number;
    private location: string;
    [key: string]: any;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
    }

    printTeacher() {
        console.log(`Teacher: ${this.firstName} ${this.lastName}`);
    }
}
interface Directors extends Teacher {
    numberOfReports: number;
}
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


class StudentClass implements Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;

    constructor(firstName: string, lastName: string, age: number, location: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    workOnHomework(){
        console.log('Currently working');
    }

    displayName(){
        console.log(this.firstName);
    }
}