function getNextBirthday(day, month) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getNextBirthday(1, 4);
console.log('Next birthday on: ', nextBirthday.toLocaleDateString());
