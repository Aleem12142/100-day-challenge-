function stringToNumber(string: string): number{
    return parseFloat(string);
}

function convertToNumber(string: string): number{
    return parseInt(string);
}

console.log(stringToNumber("98.99"));
console.log(stringToNumber("876"));
console.log(stringToNumber("234.678"));

console.log(convertToNumber("657.98"));
console.log(convertToNumber("876.765"));
console.log(convertToNumber("6543"));