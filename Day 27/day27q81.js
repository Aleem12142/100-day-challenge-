function iritatObjectPropeties(obj) {
    for (var propety in obj) {
        console.log("".concat(propety, ": ").concat(obj[propety]));
    }
}
iritatObjectPropeties({ make: "Toyota", model: "Corolla", year: 2020, color: "red" });
