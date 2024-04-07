class laptop {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    describe(): void{
        console.log(`This is a ${this.make} ${this.model} ${this.year} laptop.`);
    }
}

const laptop1 = new laptop('Apple', 'MacBook Pro', 2023);
const laptop2 = new laptop('Hp', 'EliteBook', 2022);

laptop1.describe();
laptop2.describe();
