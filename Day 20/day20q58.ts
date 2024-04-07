function averageScores(...scores: number[]): number{
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

console.log(averageScores(87,88,98,90,57));
