function removeLastElement(fruits) {
    fruits.pop();
    return fruits;
}
var fruits = ["Banana", "Apple", "Dates", "Cherry"];
console.log("Original array of fruits:", fruits);
console.log(removeLastElement(fruits) && "Array after removing last fruit:", fruits);
function removeLastElementOfArray(fruit) {
    return fruit.pop();
}
var fruit = ["Apple", "Banana", "Cherry"];
console.log(removeLastElementOfArray(fruit));
console.log(fruit);
