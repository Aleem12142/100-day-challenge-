"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let object = {
    name: "Muhammad Aleem",
    description: "I am a Software Developer.",
    getInfo: function () {
        return `${this.name}: ${this.description}`;
    }
};
console.log(object.getInfo());
