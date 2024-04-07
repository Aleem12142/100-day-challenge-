function squareDeclaration(number: number): number{
    return number * number;
}

let squareExpression = function(number: number): number{
    return number * number;
};

console.log(squareDeclaration(7));
console.log(squareExpression(9));
