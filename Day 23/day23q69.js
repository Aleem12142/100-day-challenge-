function quotientAndRemainder(number3, number4) {
    var quotient = Math.floor(number3 / number4);
    var remainder = number3 % number4;
    return { quotient: quotient, remainder: remainder };
}
console.log(quotientAndRemainder(13, 5));
console.log(quotientAndRemainder(17, 2));
console.log(quotientAndRemainder(20, 4));
console.log(quotientAndRemainder(54, 7));
