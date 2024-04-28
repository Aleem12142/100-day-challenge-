"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringConvertion(string) {
    let capitalString = string.toLocaleUpperCase();
    let smallString = string.toLocaleLowerCase();
    console.log("CapitalString: ", capitalString, "smallString: ", smallString);
}
stringConvertion("Hello Aleem");
