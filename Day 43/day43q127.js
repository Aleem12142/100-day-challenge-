"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let traditionalFuntion = function (a, b) {
    return a + b;
};
let arrowFuntion = (a, b) => {
    return a + b;
};
// Or
// let arrowFuntion = (a: number, b: number): number => a + b;
console.log(traditionalFuntion(5, 6));
console.log(arrowFuntion(5, 6));
