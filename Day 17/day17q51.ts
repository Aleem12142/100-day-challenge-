// Original function to calculate area
function calculateArea(lenght: number, width: number): number{
    return lenght * width;
}
// Refactor into arrow function
let calculateRectangleArea = (length: number, width: number): number => length * width;

// Usage Example
console.log(calculateRectangleArea(12,16));
