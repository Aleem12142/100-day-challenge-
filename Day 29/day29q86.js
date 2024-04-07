function hasJavaScript(input) {
    var lowerCaseINput = input.toLowerCase();
    return input.toLowerCase().indexOf("javascript") !== -1;
}
var test1 = "I love to code in JavaScript.";
var test2 = "Is Python better than JavaScript?";
console.log(hasJavaScript(test1));
console.log(hasJavaScript(test2));
