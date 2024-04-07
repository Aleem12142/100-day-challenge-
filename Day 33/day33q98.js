function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var difference = newYear.getTime() - today.getTime(); // gives time in milli seconds
    var days = Math.ceil(difference / (1000 * 60 * 60 * 24)); // converts into days
    return days;
}
console.log(daysUntilNewYear() + 'days until new year.');
