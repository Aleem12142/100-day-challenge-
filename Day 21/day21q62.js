var student = /** @class */ (function () {
    function student(name, age, classes) {
        this.name = name;
        this.age = age;
        this.classes = classes;
    }
    student.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name));
        console.log("Age: ".concat(this.age));
        console.log("Classes: ".concat(this.classes.join(',')));
    };
    return student;
}());
var student1 = new student('Aleem', 22, ['English', 'Science', 'typescript']);
var student2 = new student('Ashar', 21, ['English', 'History', 'Math']);
student1.displayInfo();
student2.displayInfo();
