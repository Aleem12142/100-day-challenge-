var grades = [88, 98, 89, 99, 94, 79, 87, 97];
var sumOfgrades = grades.reduce(function (total, grade) { return total + grade; }, 0);
var averageGrade = sumOfgrades / grades.length;
console.log("Original grades:", grades);
console.log("Average grade:", averageGrade);
