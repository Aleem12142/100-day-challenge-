"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number. Please enter a valid number between 1 and 7.");
    }
}
logDayOfWeek(3);
logDayOfWeek(5);
logDayOfWeek(8);
logDayOfWeek(6);
