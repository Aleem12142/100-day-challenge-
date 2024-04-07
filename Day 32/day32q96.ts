function sumOfArray(numbers: number[]): number{
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

let numbers = [2, 4, 6, 8, 9, 3];
console.log(sumOfArray(numbers));