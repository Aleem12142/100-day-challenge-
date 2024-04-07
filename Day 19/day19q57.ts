let grades = [88, 98, 89, 99, 94, 79, 87,97];

let sumOfgrades = grades.reduce((total, grade) => total + grade, 0);

let averageGrade = sumOfgrades / grades.length;

console.log("Original grades:", grades);
console.log("Average grade:", averageGrade);
