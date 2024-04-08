"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let countryCapitalMap = new Map();
countryCapitalMap.set("Pakistan", "Islamabad");
countryCapitalMap.set("India", "New Delhi");
countryCapitalMap.set("Japan", "Tokyo");
countryCapitalMap.set("France", "Paris");
countryCapitalMap.set("USA", "Washington D.C");
console.log("Country-Capital Map:");
for (let [country, capital] of countryCapitalMap) {
    console.log(`${country} - ${capital}`);
}
