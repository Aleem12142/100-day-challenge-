"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicianss = ['Kareem', 'Kaleem', 'Kamran', 'Jabbar'];
function show_magicians(magicianss) {
    magicianss.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicianss) {
    let greatMagicians = [];
    magicianss.forEach(magician => {
        greatMagicians.push(`The Great ${magician}`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicianss.slice());
console.log("Original Magicians:");
show_magicians(magicianss);
console.log("Great Magician:");
show_magicians(greatMagicians);
