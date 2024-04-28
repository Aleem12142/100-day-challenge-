"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// First Laptop price set
const laptopPriceSet1 = [14000, 17000, 20000];
// Second Laptop price set
const laptopPriceSet2 = [13000, 15000, 21000];
// Lets combined above arrays
const combinedPriceSet = [...laptopPriceSet1, ...laptopPriceSet2];
// Lets sort above combined array in asending order
combinedPriceSet.sort((a, b) => a - b);
// Let print out combined and sorted array
console.log('Combined and sorted prices of laptops in asending order:', combinedPriceSet);
