"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replaceFruit(fruit) {
    let indexOfBanana = fruit.indexOf("Banana");
    if (indexOfBanana !== -1) {
        fruit[indexOfBanana] = "Mango";
        console.log("Replaced 'Banana' with 'Mango' .New array:", fruit);
    }
    else {
        console.log("'Banana' not found in array.");
    }
}
let fruit = ["Apple", "Banana", "Orang", "Graps"];
replaceFruit(fruit);
