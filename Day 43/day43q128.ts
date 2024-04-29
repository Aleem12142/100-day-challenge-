let multiplyNumbers = (...numbers: number[]): number => {
    if(numbers.length === 0){
        return 0;
    }
    return numbers.reduce((total, num) => total * num, 1);
};

console.log(multiplyNumbers(1,2,3,4,5));