"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomHexColor() {
    let color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
console.log(getRandomHexColor());
