"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 22;
age = 20;
console.log(age);
const $name = "Aleem";
try {
    //  The line given below will cause error while compiling.To prevent error, it is commented
    // name = "Ashar"
}
catch (error) {
    console.log("Error: Can't reassign a 'const' declared variable.");
}
