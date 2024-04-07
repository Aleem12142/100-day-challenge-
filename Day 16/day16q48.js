var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// First Laptop price set
var laptopPriceSet1 = [14000, 17000, 20000];
// Second Laptop price set
var laptopPriceSet2 = [13000, 15000, 21000];
// Lets combined above arrays
var combinedPriceSet = __spreadArray(__spreadArray([], laptopPriceSet1, true), laptopPriceSet2, true);
// Lets sort above combined array in asending order
combinedPriceSet.sort(function (a, b) { return a - b; });
// Let print out combined and sorted array
console.log('Combined and sorted prices of laptops in asending order:', combinedPriceSet);
