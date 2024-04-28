"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class student {
    name;
    age;
    classes;
    constructor(name, age, classes) {
        this.name = name;
        this.age = age;
        this.classes = classes;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Classes: ${this.classes.join(',')}`);
    }
}
let student1 = new student('Aleem', 22, ['English', 'Science', 'typescript']);
let student2 = new student('Ashar', 21, ['English', 'History', 'Math']);
student1.displayInfo();
student2.displayInfo();
