function hasJavaScript(input: string): boolean {
    let lowerCaseINput = input.toLowerCase();
    return input.toLowerCase().indexOf("javascript") !== -1;
}

let test1 = "I love to code in JavaScript.";
let test2 = "Is Python better than JavaScript?";

console.log(hasJavaScript(test1));
console.log(hasJavaScript(test2));
