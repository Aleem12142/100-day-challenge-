function replaceFruit(fruit) {
    var indexOfBanana = fruit.indexOf("Banana");
    if (indexOfBanana !== -1) {
        fruit[indexOfBanana] = "Mango";
        console.log("Replaced 'Banana' with 'Mango' .New array:", fruit);
    }
    else {
        console.log("'Banana' not found in array.");
    }
}
var fruit = ["Apple", "Banana", "Orang", "Graps"];
replaceFruit(fruit);
