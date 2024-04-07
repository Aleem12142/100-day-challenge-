function filterArray(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numbers = [2, 5, 7, 8, 9, 12, 56, 34, 89, 908];
console.log(filterArray(numbers));
