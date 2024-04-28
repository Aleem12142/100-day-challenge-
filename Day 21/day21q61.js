"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vehicalType;
(function (vehicalType) {
    vehicalType[vehicalType["bike"] = 0] = "bike";
    vehicalType[vehicalType["car"] = 1] = "car";
    vehicalType[vehicalType["truck"] = 2] = "truck";
    vehicalType[vehicalType["bus"] = 3] = "bus";
})(vehicalType || (vehicalType = {}));
console.log(vehicalType.bike);
console.log(vehicalType.bus);
console.log(vehicalType.car);
console.log(vehicalType.truck);
