interface car {
    make: string;
    model: string;
    year: number;
    [key: string]: any;
}

function iritatObjectPropeties(obj: car) {
    for (let propety in obj) {
        console.log(`${propety}: ${obj[propety]}`);
    }
}

iritatObjectPropeties({make: "Toyota", model: "Corolla", year: 2020, color: "red"});
