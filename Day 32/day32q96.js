"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumOfArray(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
let numbers = [2, 4, 6, 8, 9, 3];
console.log(sumOfArray(numbers));
