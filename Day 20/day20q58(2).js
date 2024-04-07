var scores = [88, 99, 67, 89, 97];
var sumOfScores = scores.reduce(function (sum, score) { return sum + score; }, 0);
var averageScores = sumOfScores / scores.length;
console.log("Original scores:", scores);
console.log("Average score:", averageScores);
