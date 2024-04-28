"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quotientAndRemainder(number3, number4) {
    let quotient = Math.floor(number3 / number4);
    let remainder = number3 % number4;
    return { quotient, remainder };
}
console.log(quotientAndRemainder(13, 5));
console.log(quotientAndRemainder(17, 2));
console.log(quotientAndRemainder(20, 4));
console.log(quotientAndRemainder(54, 7));
