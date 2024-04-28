"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function averageScores(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averageScores(87, 88, 98, 90, 57));
