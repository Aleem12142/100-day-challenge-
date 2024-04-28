"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiplydecimals(number1, number2) {
    return ((number1 * number2) * 100) / 100;
}
console.log(multiplydecimals(0.2, 0.9));
console.log(multiplydecimals(0.8, 0.5));
console.log(multiplydecimals(0.3, 0.6));
