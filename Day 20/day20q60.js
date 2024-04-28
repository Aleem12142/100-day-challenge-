"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userProfile = (function () {
    let name = "Ali Raza";
    let age = 21;
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();
