function getNextBirthday(day: number, month: number): Date{
    let today = new Date();
    let year = today.getFullYear();
    let birthday = new Date(year, month -1, day);
    if(birthday < today){
        birthday.setFullYear(year + 1);
    }
    return birthday;
}

let nextBirthday = getNextBirthday(1,4);
console.log('Next birthday on: ', nextBirthday.toLocaleDateString());
