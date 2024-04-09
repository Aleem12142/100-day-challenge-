"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSeason(month) {
    let season;
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Autyumn";
            break;
        default:
            season = "Invalid Month. Please enter a number between 1 and 12.";
            break;
    }
    return season;
}
console.log(getSeason(2));
console.log(getSeason(4));
console.log(getSeason(7));
console.log(getSeason(10));
console.log(getSeason(13));
