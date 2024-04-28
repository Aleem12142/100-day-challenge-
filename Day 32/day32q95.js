"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterArray(numbers) {
    return numbers.filter(number => number > 10);
}
let numbers = [2, 5, 7, 8, 9, 12, 56, 34, 89, 908];
console.log(filterArray(numbers));
