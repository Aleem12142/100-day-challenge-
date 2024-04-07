function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addSix = makeAdder(6);
console.log(addSix(5));
console.log(addSix(10));
console.log(addSix(12));
console.log(addSix(20));
