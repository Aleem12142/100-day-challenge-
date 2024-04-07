var mixedItems = [3, "apple", 6, "banana", 9, false, "grapes"];
var onlyStrings = mixedItems.filter(function (item) { return typeof item === "string"; });
console.log("Mixed items:", mixedItems);
console.log("Only strings:", onlyStrings);
