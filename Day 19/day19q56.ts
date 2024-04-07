let mixedItems = [3, "apple", 6, "banana", 9, false, "grapes"];

let onlyStrings = mixedItems.filter(item => typeof item === "string");

console.log("Mixed items:", mixedItems);
console.log("Only strings:", onlyStrings);
