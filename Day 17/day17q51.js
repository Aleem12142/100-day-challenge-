"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Original function to calculate area
function calculateArea(lenght, width) {
    return lenght * width;
}
// Refactor into arrow function
let calculateRectangleArea = (length, width) => length * width;
// Usage Example
console.log(calculateRectangleArea(12, 16));
