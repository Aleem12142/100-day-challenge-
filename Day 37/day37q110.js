"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    }
    else if (score >= 80) {
        return 'B';
    }
    else if (score >= 70) {
        return 'C';
    }
    else if (score >= 60) {
        return 'D';
    }
    else if (score >= 50) {
        return 'E';
    }
    else {
        return 'F';
    }
}
console.log(assignGrade(92));
console.log(assignGrade(65));
