"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDivisible(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisible(24));
console.log(isDivisible(21));
