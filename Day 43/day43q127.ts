let traditionalFuntion = function(a: number, b: number): number {
    return a + b;
};

let arrowFuntion = (a: number, b: number): number => {
    return a + b;
};
// Or
// let arrowFuntion = (a: number, b: number): number => a + b;
console.log(traditionalFuntion(5,6));
console.log(arrowFuntion(5, 6));