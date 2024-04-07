let scores = [88, 99, 67, 89, 97];

let sumOfScores = scores.reduce((sum, score) => sum + score,0);

let averageScores = sumOfScores / scores.length;

console.log("Original scores:", scores);
console.log("Average score:", averageScores);
