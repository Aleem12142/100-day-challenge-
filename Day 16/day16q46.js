var laptop = /** @class */ (function () {
    function laptop(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    laptop.prototype.describe = function () {
        console.log("This is a ".concat(this.make, " ").concat(this.model, " ").concat(this.year, " laptop."));
    };
    return laptop;
}());
var laptop1 = new laptop('Apple', 'MacBook Pro', 2023);
var laptop2 = new laptop('Hp', 'EliteBook', 2022);
laptop1.describe();
laptop2.describe();
