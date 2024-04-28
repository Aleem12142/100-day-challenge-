"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let currentTime = new Date();
let currentHours = currentTime.getHours();
if (currentHours < 12) {
    console.log('Good Morning');
}
else if (currentHours < 17) {
    console.log('Good Afternoon');
}
else if (currentHours < 21) {
    console.log('Good Evening');
}
else {
    console.log('Good Night');
}
