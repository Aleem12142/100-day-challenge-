interface car {
    make: string;
    model: string;
    year: number;
    [key: string]: any;
}

let car: car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
    
};

car.year = 2021;
car.color = "red";

console.log(car);
