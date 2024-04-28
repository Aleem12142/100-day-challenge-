"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeLastElement(fruits) {
    fruits.pop();
    return fruits;
}
let fruits = ["Banana", "Apple", "Dates", "Cherry"];
console.log("Original array of fruits:", fruits);
console.log(removeLastElement(fruits) && "Array after removing last fruit:", fruits);
// Another method
function removeLastElementOfArray(fruit) {
    return fruit.pop();
}
let fruit = ["Apple", "Banana", "Cherry"];
console.log(removeLastElementOfArray(fruit));
console.log(fruit);
