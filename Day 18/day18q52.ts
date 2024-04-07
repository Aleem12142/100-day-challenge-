interface SmartphoneSpecs {
    storage: string;
    display: string;
    batteryLife: string;
}

let smartphone = {
    make: "Redmi",
    model: "Note 9s",
    specs: {
        storage: "6/128GB",
        display: "6.57 inches",
        batteryLife: "23 hours"
    }
}

console.log(`Make: ${smartphone.make}`);
console.log(`Model: ${smartphone.make}`);
console.log(`Storage: ${smartphone.specs.storage}`);
console.log(`Display: ${smartphone.specs.display}`);
console.log(`Battery Life: ${smartphone.specs.batteryLife}`);
