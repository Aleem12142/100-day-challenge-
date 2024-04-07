function makeAdder(valueToAdd: number): (input: number) => number{
    return function (number: number): number{
        return number + valueToAdd;
    };
}

let addSix = makeAdder(6);

console.log(addSix(5));
console.log(addSix(10));
console.log(addSix(12));
console.log(addSix(20));
