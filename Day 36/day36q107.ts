function isDivisible(number: number): boolean{
    return number % 2 === 0 && number % 3 === 0;
}

console.log(isDivisible(24));
console.log(isDivisible(21));