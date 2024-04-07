function sumOfArray(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [2, 4, 6, 8, 9, 3];
console.log(sumOfArray(numbers));
