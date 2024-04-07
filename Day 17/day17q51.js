// Original function to calculate area
function calculateArea(lenght, width) {
    return lenght * width;
}
// Refactor into arrow function
var calculateRectangleArea = function (length, width) { return length * width; };
// Usage Example
console.log(calculateRectangleArea(12, 16));
