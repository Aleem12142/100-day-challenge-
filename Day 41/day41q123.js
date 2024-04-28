"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const str = "Hello World";
const vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLocaleLowerCase())) {
        console.log("First vowel found:", str[i]);
        break;
    }
}
