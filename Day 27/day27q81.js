"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function iritatObjectPropeties(obj) {
    for (let propety in obj) {
        console.log(`${propety}: ${obj[propety]}`);
    }
}
iritatObjectPropeties({ make: "Toyota", model: "Corolla", year: 2020, color: "red" });
