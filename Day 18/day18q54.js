"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
