"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
let addSix = makeAdder(6);
console.log(addSix(5));
console.log(addSix(10));
console.log(addSix(12));
console.log(addSix(20));
