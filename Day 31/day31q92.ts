function removeLastElement(fruits: string[]): string[]{
    fruits.pop();
    return fruits;
}
let fruits = ["Banana", "Apple", "Dates", "Cherry"];
console.log("Original array of fruits:", fruits);
console.log(removeLastElement(fruits) && "Array after removing last fruit:", fruits);
// Another method
function removeLastElementOfArray<T>(fruit: T[]): T | undefined{
    return fruit.pop();
}
let fruit = ["Apple", "Banana", "Cherry"];
console.log(removeLastElementOfArray(fruit));
console.log(fruit);